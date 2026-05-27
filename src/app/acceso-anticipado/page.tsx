import { redirect } from 'next/navigation'

export default function AccesoAnticipado({
  searchParams,
}: {
  searchParams: { ref?: string }
}) {
  const ref = searchParams.ref
  // Preserve the ref param so WaitlistForm can pick it up on the homepage
  redirect(ref ? `/?ref=${ref}#acceso-anticipado` : '/#acceso-anticipado')
}
