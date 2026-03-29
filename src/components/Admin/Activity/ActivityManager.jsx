import React, { useState } from 'react';
import HikingFields from './forms/HikingField';
import TrekkingFields from './forms/TrekkingField';
import RaftingFields from './forms/RaftingField';
import SightseeingFields from './forms/SightSeeingField';
import ImageUploadField from '../ImageUploadField';
import DataTable from '../DataTable'; // Reusable table component

const ActivityManager = () => {
  const [category, setCategory] = useState('hiking');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 1. DATA STORAGE STATE
  const [activities, setActivities] = useState([
    
  ]);

  // 2. FORM STATE
  const [commonData, setCommonData] = useState({ title: '', price: '' });
  const [specificData, setSpecificData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  // inside ActivityManager or DestinationManager
const [editingItem, setEditingItem] = useState(null);

const handleEdit = (item) => {
  // 1. Set the item being edited so we have the ID later
  setEditingItem(item); 

  // 2. Pre-fill common fields (mapping based on type)
  setCommonData({ 
    title: item.title || item.name || '', 
    price: item.price || item.budget || '',
    description: item.description || '' 
  });

  // 3. Pre-fill specific category fields
  setSpecificData(item.details || {});

  // 4. Set the image preview
  setSelectedImage(item.image || null);

  // 5. Finally, open the modal
  setIsModalOpen(true);
};

  const FieldComponents = {
    hiking: HikingFields,
    trekking: TrekkingFields,
    rafting: RaftingFields,
    sightseeing: SightseeingFields
  };

  const ActiveFields = FieldComponents[category];

  // 3. HANDLERS
  const handleCommonChange = (e) => {
    setCommonData({ ...commonData, [e.target.name]: e.target.value });
  };

  const handleSpecificChange = (e) => {
    setSpecificData({ ...specificData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const updatedPayload = {
    ...commonData,
    details: specificData,
    image: selectedImage ? URL.createObjectURL(selectedImage) : null,
    category: category,
    id: editingItem ? editingItem.id : Date.now() // Keep the old ID if editing
  };

  if (editingItem) {
    // Logic to replace the item in the array
    setActivities(activities.map(a => a.id === editingItem.id ? updatedPayload : a));
  } else {
    // Logic to add new
    setActivities([updatedPayload, ...activities]);
  }

  // CLOSE & RESET
  setIsModalOpen(false);
  setEditingItem(null);
  // ... clear other states ...
};

  

  const handleDelete = (id) => {
    setActivities(activities.filter(act => act.id !== id));
  };

  return (
    <div className="p-8 font-['Montserrat'] animate-in fade-in duration-500">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-1">Inventory Management</p>
          <h2 className="text-4xl font-black text-slate-900 capitalize tracking-tighter">
            {category}<span className="text-emerald-500">.</span>
          </h2>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl">
            {Object.keys(FieldComponents).map(cat => (
              <button 
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setSpecificData({}); 
                }}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  category === cat ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl active:scale-95"
          >
            + Add New {category}
          </button>
        </div>
      </div>

      {/* 4. THE DATA TABLE (Filtered by Category) */}
      <DataTable 
        type="activities"
        data={activities.filter(item => item.category === category)} 
        onDelete={handleDelete}
        onEdit={handleEdit} // Pass the edit handler to the table
      />

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl bg-white h-full rounded-[3rem] p-12 overflow-y-auto animate-in slide-in-from-right duration-500 shadow-2xl">
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter text-slate-900">
              Configure {category} Trip
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <ImageUploadField onImageSelect={(file) => setSelectedImage(file)} />

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Package Title</label>
                   <input 
                    type="text" name="title" value={commonData.title} onChange={handleCommonChange}
                    placeholder="e.g. Everest Base Camp Trek" 
                    className="w-full p-4 bg-slate-50 rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-emerald-500/10" required
                  />
                </div>
                <div>
                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Price (USD)</label>
                   <input 
                    type="number" name="price" value={commonData.price} onChange={handleCommonChange}
                    placeholder="0.00" 
                    className="w-full p-4 bg-slate-50 rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-emerald-500/10" required
                  />
                </div>
              </div>

              <div className="py-8 border-y border-slate-100">
                <ActiveFields formData={specificData} onChange={handleSpecificChange} /> 
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button type="submit" className="w-full py-5 bg-emerald-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-emerald-500/20 hover:bg-slate-900 transition-all">
                  Publish Activity
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="w-full py-4 text-slate-400 font-bold text-[10px] uppercase hover:text-slate-600 transition-colors"
                >
                  Discard Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityManager;