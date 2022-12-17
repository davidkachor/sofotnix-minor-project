<template>
  <div class="flex flex-col gap-medium w-full">
    <el-upload
      action="#"
      drag
      class="w-full"
      :auto-upload="false"
    >
      <div class="relative">
        <ImagePlaceholderIcon class="w-[200px] fill-layout" />

        <p class="absolute top-[50%] translate-x-[50%] right-[50%] translate-y-[-50%] text-xl w-full">
          <strong class="font-medium">Drag here</strong>
          your file or
          <strong class="font-medium">Click here</strong>
          to upload
        </p>
      </div>
    </el-upload>

    <button
      class="uppercase tracking-[2px] text-xs bg-main !text-white font-medium
      px-[30px] py-3 m-auto h-auto rounded-[10px] w-max"
    >
      Upload Photo
    </button>
  </div>
</template>
