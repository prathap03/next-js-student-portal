import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Elon Musk",
        src: "https://external.fmaa5-1.fna.fbcdn.net/safe_image.php?w=500&h=261&url=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220520082604-02-elon-musk-0322-super-tease.jpg&cfs=1&ext=jpg&utld=cnn.com&_nc_oe=7033d&_nc_sid=505865&_nc_o2e=1&ccb=3-6&_nc_hash=AQEAXdL48YQXIMC8",
        profile: "https://external.fmaa5-1.fna.fbcdn.net/safe_image.php?w=108&h=108&url=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F107063491-16529089492022-05-18t210710z_1773411046_rc2w9u9z7ee9_rtrmadp_0_tesla-musk.jpeg%3Fv%3D1652909023%26w%3D1920%26h%3D1080&cfs=1&ext=emg0&utld=cnbcfm.com&_nc_oe=7033c&_nc_sid=cb08d0&_nc_o2e=1&ccb=3-6&_nc_hash=AQENKzTyJeuMfwMV"
    },
    {
        name: "Elon Musk",
        src: "https://external.fmaa5-1.fna.fbcdn.net/safe_image.php?w=500&h=261&url=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220520082604-02-elon-musk-0322-super-tease.jpg&cfs=1&ext=jpg&utld=cnn.com&_nc_oe=7033d&_nc_sid=505865&_nc_o2e=1&ccb=3-6&_nc_hash=AQEAXdL48YQXIMC8",
        profile: "https://external.fmaa5-1.fna.fbcdn.net/safe_image.php?w=108&h=108&url=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F107063491-16529089492022-05-18t210710z_1773411046_rc2w9u9z7ee9_rtrmadp_0_tesla-musk.jpeg%3Fv%3D1652909023%26w%3D1920%26h%3D1080&cfs=1&ext=emg0&utld=cnbcfm.com&_nc_oe=7033c&_nc_sid=cb08d0&_nc_o2e=1&ccb=3-6&_nc_hash=AQENKzTyJeuMfwMV"
    },
    {
        name: "Elon Musk",
        src: "https://external.fmaa5-1.fna.fbcdn.net/safe_image.php?w=500&h=261&url=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220520082604-02-elon-musk-0322-super-tease.jpg&cfs=1&ext=jpg&utld=cnn.com&_nc_oe=7033d&_nc_sid=505865&_nc_o2e=1&ccb=3-6&_nc_hash=AQEAXdL48YQXIMC8",
        profile: "https://external.fmaa5-1.fna.fbcdn.net/safe_image.php?w=108&h=108&url=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F107063491-16529089492022-05-18t210710z_1773411046_rc2w9u9z7ee9_rtrmadp_0_tesla-musk.jpeg%3Fv%3D1652909023%26w%3D1920%26h%3D1080&cfs=1&ext=emg0&utld=cnbcfm.com&_nc_oe=7033c&_nc_sid=cb08d0&_nc_o2e=1&ccb=3-6&_nc_hash=AQENKzTyJeuMfwMV"
    },
];

function Stories() {

    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => {

                return <StoryCard
                    key={story.src}
                    name={story.name} profile={story.profile} src={story.src} />
            })}

        </div>
    )
}

export default Stories