import React from 'react'

import { cn } from '@/lib/utils'
import { Upload } from 'lucide-react'

import { Input } from '@/components'
import { useFileStore } from '@/store/file-store'

interface Props {
  className?: string
}

const FILES_PER_LOAD = Number(process.env.NEXT_PUBLIC_FILES_PER_LOAD) || 10 // integer
const FILE_MAX_SIZE = Number(process.env.NEXT_PUBLIC_FILE_MAX_SIZE) || 12 // megabytes only

const filesPerLoad = FILES_PER_LOAD
const fileLimit = 1024 * 1024 * FILE_MAX_SIZE
const formats = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const UploadInput: React.FC<Props> = ({ className }) => {
  const { files, setFiles } = useFileStore()

  console.log(files)

  const onUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (files) {
      const uploads = Array.from(files)
        .slice(0, filesPerLoad)
        .filter((file) => formats.includes(file.type) && file.size < fileLimit)

      if (uploads.length > 0) {
        setFiles(uploads)
      }
    }

    event.target.value = ''
  }

  return (
    <div className={cn('w-full hover:*:border-foreground', className)}>
      <div className="px-4 py-10 flex flex-col items-center justify-center border border-muted-foreground/80 border-dashed relative hover:bg-secondary/40 transition duration-300">
        <Upload className="mb-3.5 text-secondary-foreground/80" size={24} />

        <span className="mb-2.5 text-secondary-foreground/80">
          Drop files here, or click to select...
        </span>

        <p className="text-sm font-[Roboto] text-muted-foreground/90">
          Available formats: JPG, JPEG, PNG (up to {FILE_MAX_SIZE} MB each)
        </p>

        <Input
          className="w-full h-full opacity-0 cursor-pointer absolute"
          id="file"
          type="file"
          multiple
          accept="image/jpeg,image/png,image/jpg,image/webp"
          onChange={onUpload}
        />
      </div>
    </div>
  )
}
