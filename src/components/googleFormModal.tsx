import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline';



interface GoogleFormModalProps {
    googleFormModalOpen: boolean;
    setGoogleFormModalOpen: (isOpen: boolean) => void;
}


const GoogleFormModal : React.FC<GoogleFormModalProps> = ( { googleFormModalOpen, setGoogleFormModalOpen} ) => {
    return (
        <Dialog
            open={googleFormModalOpen}
            onClose={() => setGoogleFormModalOpen(false)}
            className="relative z-50 w-screen h-screen overflow-y-auto"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center rounded-md">
            {/* we need a back button here */}
          <Dialog.Panel className="w-full h-full rounded-md pb-20 bg-tertiary sm:p-12">
            <div className='flex justify-end p-2'>
              <XMarkIcon className="h-8 w-8 cursor-pointer" aria-hidden="true"   onClick={() => setGoogleFormModalOpen(false)}/>
            </div>        
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeviBSauE052pGsbLQ-jblbnFsUS97f4FtJ3fxQ92ebcxXy5w/viewform?embedded=true" width="100%" height="100%">Loading…</iframe>
          </Dialog.Panel>
          <div></div>
        </div>
      </Dialog>
        
    )
}

export default GoogleFormModal;