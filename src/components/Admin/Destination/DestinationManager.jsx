import React, { useState } from 'react';
import DomesticFields from "./forms/DomesticField";
import InternationalFields from "./forms/InternationalField";
import ImageUploadField from '../ImageUploadField';
import DataTable from '../DataTable';

const DestinationManager = () => {
  const [type, setType] = useState('domestic');
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleEdit = (item) => {
    setEditingItem(item);
    setType(item.type);
    setCommonData({
      name: item.name,
      description: item.description,
      budget: item.budget
    });
    setSpecificData(item.details || {});
    setSelectedImage(item.image);
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
      setDestinations(destinations.map(dest => 
        dest.id === editingItem.id ? { ...dest, ...destinationData } : dest
      ));
    } else {
      const newDestination = {
        id: Date.now(),
        ...destinationData,
        createdAt: new Date().toISOString()
      };
      setDestinations([newDestination, ...destinations]);
    }
    closeModal();
  };

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
    <div className="p-4 md:p-8 font-['Montserrat'] animate-in fade-in duration-500">
      
      {/* 1. TYPE SWITCHER - Responsive width */}
      <div className="flex gap-2 md:gap-4 mb-8 bg-slate-100 p-1.5 rounded-xl md:rounded-2xl w-full sm:w-fit overflow-x-auto no-scrollbar">
        {['domestic', 'international'].map(t => (
          <button 
            key={t}
            onClick={() => { 
              setType(t); 
              setSpecificData({}); 
            }}
            className={`flex-1 sm:flex-none px-4 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              type === t ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 2. HEADER SECTION - Stacked on mobile */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <p className="text-[9px] md:text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-1">Geography Manager</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter capitalize">
            {type} <span className="text-emerald-500">Destinations</span>
          </h2>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95"
        >
          + Add New {type}
        </button>
      </div>

      {/* 3. DATA TABLE - Overflow handling */}
      <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <DataTable 
            type="destinations"
            data={destinations.filter(item => item.type === type)} 
            onDelete={handleDelete}
            onEdit={handleEdit} 
          />
        </div>
      </div>

      {/* 4. MODAL - Drawer on Large, Full screen on Mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center lg:justify-end bg-slate-900/40 backdrop-blur-sm p-0 sm:p-4">
          <div className="w-full max-w-xl bg-white h-full sm:h-[95vh] lg:h-full rounded-none sm:rounded-[2rem] lg:rounded-l-[3rem] lg:rounded-r-none p-6 md:p-12 overflow-y-auto animate-in slide-in-from-right sm:slide-in-from-bottom lg:slide-in-from-right duration-500 shadow-2xl">
            
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                {editingItem ? `Edit ${editingItem.name}` : `New ${type} Spot`}
              </h3>
              <button onClick={closeModal} className="lg:hidden text-slate-400 font-bold text-[10px] uppercase">Close</button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <ImageUploadField 
                onImageSelect={(file) => setSelectedImage(file)} 
                initialPreview={selectedImage} 
              />

              <div className="space-y-4">
                <div>
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