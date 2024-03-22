import { SpeakerForm } from '@/components/admin/speaker-form'
import { db } from '@/lib/db'

const page = async () => {
  const keytalks = await db.keytalk.findMany({
    select: {
      id: true,
      title: true,
    }
  });
  return (
    <SpeakerForm keytalks={keytalks}/>
  )
}

export default page
