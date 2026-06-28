import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { useUIStore } from '@/store/uiStore'

function SuccessMailIcon() {
  return (
    <div className="relative size-[107px]">
      <div className="absolute left-[6.78px] top-[6.78px] size-[94px] rounded-full bg-primary/20" />
      <div className="absolute left-0 top-0 size-[107px] rounded-full bg-primary/30" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/3 items-center justify-center">
        <svg
          width="64"
          height="48"
          viewBox="0 0 64 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M4 8C4 5.79086 5.79086 4 8 4H56C58.2091 4 60 5.79086 60 8V40C60 42.2091 58.2091 44 56 44H8C5.79086 44 4 42.2091 4 40V8Z"
            fill="#91FF02"
          />
          <path
            d="M4 12L32 28L60 12"
            stroke="#0A0D12"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48 36L60 28"
            stroke="#3A6601"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 36L4 28"
            stroke="#3A6601"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}

export function SuccessModal() {
  const { isSuccessModalOpen, closeSuccessModal } = useUIStore()

  const handleBackHome = () => {
    closeSuccessModal()
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Dialog.Root open={isSuccessModalOpen} onOpenChange={(open) => !open && closeSuccessModal()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="success-modal fixed left-1/2 top-1/2 z-50 w-[calc(100%-32px)] max-w-[361px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-neutral-800 bg-black px-6 pb-6 pt-20 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 lg:max-w-[400px]">
          <div className="relative flex flex-col items-center gap-2 text-center">
            <div className="absolute -top-[134px] left-1/2 flex -translate-x-1/2 items-center justify-center">
              <SuccessMailIcon />
            </div>

            <Dialog.Title className="text-lg font-bold leading-8 text-neutral-25">
              Message Sent Successfully!
            </Dialog.Title>
            <Dialog.Description className="text-sm leading-7 text-neutral-400">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible
            </Dialog.Description>
          </div>

          <Button
            className="mt-6 h-12 w-full text-sm font-bold shadow-green"
            size="lg"
            onClick={handleBackHome}
          >
            BACK TO HOME
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
