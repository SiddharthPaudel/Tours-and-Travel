import React, { useState } from 'react';
import DomesticFields from "./forms/DomesticField";
import InternationalFields from "./forms/InternationalField";
import ImageUploadField from '../ImageUploadField';
import DataTable from '../DataTable';

const DestinationManager = () => {
  const [type, setType] = useState('domestic');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 1. ADDED: EDITING STATE
  const [editingItem, setEditingItem] = useState(null);

  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: 'Pokhara',
      description: 'The city of lakes and gateway to the Annapurnas.',
      budget: '$200 - $500',
      type: 'domestic',
      details: { province: 'Gandaki', transport: 'bus' },
      image: null
    }
  ]);

  const [commonData, setCommonData] = useState({ name: '', description: '', budget: '' });
  const [specificData, setSpecificData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const FieldComponents = {
    domestic: DomesticFields,
    international: InternationalFields,
  };

  const ActiveFields = FieldComponents[type];

  // 2. UPDATED: EDIT HANDLER
  const handleEdit = (item) => {
    setEditingItem(item);
    setType(item.type); // Ensure the correct form fields (domestic/intl) show up
    setCommonData({
      name: item.name,
      description: item.description,
      budget: item.budget
    });
    setSpecificData(item.details || {});
    setSelectedImage(item.image); // This will show the existing image in preview
    setIsModalOpen(true);
  };

  const handleCommonChange = (e) => {
    setCommonData({ ...commonData, [e.target.name]: e.target.value });
  };

  const handleSpecificChange = (e) => {
    setSpecificData({ ...specificData, [e.target.name]: e.target.value });
  };

  // 3. UPDATED: SUBMIT LOGIC (Handles both Add and Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const destinationData = {
      ...commonData,
      details: specificData,
      image: typeof selectedImage === 'object' && selectedImage !== null 
             ? URL.createObjectURL(selectedImage) 
             : selectedImage,
      type: type,
      updatedAt: new Date().toISOString()
    };

    if (editingItem) {
      // UPDATE logic
      setDestinations(destinations.map(dest => 
        dest.id === editingItem.id ? { ...dest, ...destinationData } : dest
      ));
    } else {
      // CREATE logic
      const newDestination = {
        id: Date.now(),
        ...destinationData,
        createdAt: new Date().toISOString()
      };
      setDestinations([newDestination, ...destinations]);
    }
    
    closeModal();
  };

  // 4. ADDED: CLEAN CLOSE HANDLER
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setCommonData({ name: '', description: '', budget: '' });
    setSpecificData({});
    setSelectedImage(null);
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this destination?")) {
      setDestinations(destinations.filter(dest => dest.id !== id));
    }
  };

  return (
    <div className="p-8 font-['Montserrat'] animate-in fade-in duration-500">
      
      {/* TYPE SWITCHER */}
      <div className="flex gap-4 mb-8 bg-slate-100 p-2 rounded-2xl w-fit">
        {['domestic', 'international'].map(t => (
          <button 
            key={t}
            onClick={() => { 
              setType(t); 
              setSpecificData({}); 
            }}
            className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              type === t ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-1">Geography Manager</p>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter capitalize">
            {type} <span className="text-emerald-500">Destinations</span>
          </h2>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95"
        >
          + Add New {type}
        </button>
      </div>

      {/* 5. DATA TABLE WITH EDIT PASSED DOWN */}
      <DataTable 
        type="destinations"
        data={destinations.filter(item => item.type === type)} 
        onDelete={handleDelete}
        onEdit={handleEdit} 
      />

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl bg-white h-full rounded-[3rem] p-12 overflow-y-auto animate-in slide-in-from-right duration-500 shadow-2xl">
            
            {/* DYNAMIC TITLE */}
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">
              {editingItem ? `Edit ${editingItem.name}` : `New ${type} Spot`}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <ImageUploadField 
                onImageSelect={(file) => setSelectedImage(file)} 
                initialPreview={selectedImage} 
              />

              <div className="space-y-4">
                <div className="group">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Destination Name</label>
                  <input 
                    type="text" name="name" value={commonData.name}
                    placeholder="e.g. Pokhara or Bali"
                    className="w-full p-4 bg-slate-50 rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-emerald-500/10 transition-all" 
                    onChange={handleCommonChange} required
                  />
                </div>

                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Description</label>
                  <textarea 
                    name="description" value={commonData.description}
                    placeholder="Briefly describe the beauty of this place..."
                    className="w-full p-4 bg-slate-50 rounded-2xl font-bold text-sm outline-none min-h-[100px] border-2 border-transparent focus:border-emerald-500/10"
                    onChange={handleCommonChange}
                  />
                </div>

                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Estimated Budget</label>
                  <input 
                    type="text" name="budget" value={commonData.budget}
                    placeholder="e.g. $500 - $1000"
                    className="w-full p-4 bg-slate-50 rounded-2xl font-bold text-sm outline-none border-2 border-transparent focus:border-emerald-500/10"
                    onChange={handleCommonChange}
                  />
                </div>
              </div>

              <div className="py-6 border-y border-slate-100">
                <ActiveFields formData={specificData} onChange={handleSpecificChange} /> 
              </div>

              <div className="pt-4 space-y-3">
                <button type="submit" className="w-full py-5 bg-emerald-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-emerald-500/20 hover:bg-slate-900 transition-all">
                  {editingItem ? 'Save Changes' : 'Publish Destination'}
                </button>
                <button 
                  type="button" 
                  onClick={closeModal} 
                  className="w-full py-2 text-slate-400 font-bold text-[10px] uppercase hover:text-slate-600 transition-colors"
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

export default DestinationManager;