import React, { useState } from 'react';
import HikingFields from './forms/HikingField';
import TrekkingFields from './forms/TrekkingField';
import RaftingFields from './forms/RaftingField';
import SightseeingFields from './forms/SightSeeingField';
import ImageUploadField from '../ImageUploadField';
import DataTable from '../DataTable'; 

const ActivityManager = () => {
  const [category, setCategory] = useState('hiking');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState([]);
  const [commonData, setCommonData] = useState({ title: '', price: '' });
  const [specificData, setSpecificData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingItem, setEditingItem] = useState(null);

  const FieldComponents = {
    hiking: HikingFields,
    trekking: TrekkingFields,
    rafting: RaftingFields,
    sightseeing: SightseeingFields
  };

  const ActiveFields = FieldComponents[category];

  // --- HANDLERS ---
  const handleEdit = (item) => {
    setEditingItem(item); 
    setCommonData({ 
      title: item.title || item.name || '', 
      price: item.price || item.budget || '',
      description: item.description || '' 
    });
    setSpecificData(item.details || {});
    setSelectedImage(item.image || null);
    setIsModalOpen(true);
  };

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
      image: selectedImage ? (typeof selectedImage === 'string' ? selectedImage : URL.createObjectURL(selectedImage)) : null,
      category: category,
      id: editingItem ? editingItem.id : Date.now()
    };

    if (editingItem) {
      setActivities(activities.map(a => a.id === editingItem.id ? updatedPayload : a));
    } else {
      setActivities([updatedPayload, ...activities]);
    }

    closeAndReset();
  };

  const closeAndReset = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setCommonData({ title: '', price: '' });
    setSpecificData({});
    setSelectedImage(null);
  };

  const handleDelete = (id) => {
    setActivities(activities.filter(act => act.id !== id));
  };

  return (
    <div className="p-4 md:p-8 font-['Montserrat'] animate-in fade-in duration-500">
      
      {/* HEADER SECTION - Stacked on Mobile */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
        <div>
          <p className="text-[9px] md:text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-1">Inventory Management</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 capitalize tracking-tighter">
            {category}<span className="text-emerald-500">.</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-center">
          {/* Category Switcher - Scrollable on small screens */}
          <div className="flex bg-slate-100 p-1 rounded-xl md:rounded-2xl w-full sm:w-auto overflow-x-auto no-scrollbar">
            {Object.keys(FieldComponents).map(cat => (
              <button 
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setSpecificData({}); 
                }}
                className={`flex-1 sm:flex-none px-4 md:px-6 py-2 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  category === cat ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="w-full sm:w-auto bg-slate-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl active:scale-95"
          >
            + Add New
          </button>
        </div>
      </div>

      {/* DATA TABLE WRAPPER - Horizontal scroll for small screens */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <DataTable 
            type="activities"
            data={activities.filter(item => item.category === category)} 
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>

      {/* MODAL OVERLAY - Sliding drawer on desktop, Full screen on Mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center lg:justify-end bg-slate-900/60 backdrop-blur-sm p-0 sm:p-4">
          <div className="w-full max-w-xl bg-white h-full sm:h-[95vh] lg:h-full rounded-none sm:rounded-[2rem] lg:rounded-l-[3rem] lg:rounded-r-none p-6 md:p-12 overflow-y-auto animate-in slide-in-from-right sm:slide-in-from-bottom lg:slide-in-from-right duration-500 shadow-2xl">
            
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-slate-900">
                {editingItem ? 'Edit' : 'Configure'} {category}
              </h3>
              <button onClick={closeAndReset} className="lg:hidden text-slate-400 font-bold text-xs uppercase">Close</button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 md:y-8">
              <ImageUploadField onImageSelect={(file) => setSelectedImage(file)} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Package Title</label>
                  <input 
                    type="text" name="title" value={commonData.title} onChange={handleCommonChange}
                    placeholder="e.g. Everest Base Camp Trek" 
                    className="w-full p-4 bg-slate-50 rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-emerald-500/10" required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Price (USD)</label>
                  <input 
                    type="number" name="price" value={commonData.price} onChange={handleCommonChange}
                    placeholder="0.00" 
                    className="w-full p-4 bg-slate-50 rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-emerald-500/10" required
                  />
                </div>
              </div>

              <div className="py-6 border-y border-slate-100">
                <ActiveFields formData={specificData} onChange={handleSpecificChange} /> 
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button type="submit" className="w-full py-4 md:py-5 bg-emerald-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-emerald-500/20 hover:bg-slate-900 transition-all">
                  {editingItem ? 'Update Activity' : 'Publish Activity'}
                </button>
                <button 
                  type="button" 
                  onClick={closeAndReset} 
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