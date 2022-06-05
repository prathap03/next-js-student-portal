import Image from "next/image"


function StoryCard({ name, src, profile }) {
    return (
        <div className="realtive h-14 w-14 md:h-20 md:w-20 lg:h-58 lg:w-32 cursor-pointer overflow-x p-3">
            <Image
                className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
                src={src}
                width={40}
                height={40}
                layout="fixed"
                objectFit="cover"
                alt="story"
            />
            <Image
                className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
                alt="story"
            />
            <h1>Hello</h1>
        </div>
    )
}

export default StoryCard
