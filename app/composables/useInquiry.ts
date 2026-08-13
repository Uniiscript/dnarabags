export type InquiryReason = 'price' | 'personal' | 'item'

export function useInquiry() {
  const isOpen = useState('inquiry-open', () => false)
  const preset = useState('inquiry-preset', () => ({ reason: 'personal' as InquiryReason, product: '' }))

  function openInquiry(reason: InquiryReason = 'personal', product = '') {
    preset.value = { reason, product }
    isOpen.value = true
  }

  function closeInquiry() {
    isOpen.value = false
  }

  return { isOpen, preset, openInquiry, closeInquiry }
}
