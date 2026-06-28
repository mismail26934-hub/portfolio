import { useMutation } from '@tanstack/react-query'
import type { ContactFormData } from '@/types'

const submitContactForm = async (data: ContactFormData): Promise<ContactFormData> => {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  return data
}

export function useContactMutation() {
  return useMutation({
    mutationFn: submitContactForm,
  })
}
