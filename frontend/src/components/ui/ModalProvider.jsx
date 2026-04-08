import { createContext, useContext, useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({
      open,
      showModal: () => setOpen(true),
      hideModal: () => setOpen(false),
    }),
    [open]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-white/10 bg-mixy-950 p-6 shadow-xl focus:outline-none">
            <div className="flex items-center justify-end">
              <Dialog.Close asChild>
                <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </div>
            <div className="mt-4 text-slate-100">Modal content</div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};
