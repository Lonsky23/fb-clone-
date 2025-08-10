import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Story({imgUrl, profileImage, name}){
   return (
    <div className="relative w-36 h-full flex-shrink-0">
      <Avatar className="h-10 w-10 ring-2 ring-blue-500 absolute left-3 top-4">
        <AvatarImage src={profileImage} />
        <AvatarFallback>FB</AvatarFallback>
      </Avatar>
      <img
        src={imgUrl}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
      <h1 className="font-sans font-semibold absolute bottom-2 left-2 text-white text-md">
        {name}
      </h1>
    </div>
  );
}


function Stories() {
    return(
        <div className="h-50 flex gap-2">
            <Story imgUrl="https://res.klook.com/image/upload/fl_lossy.progressive/q_auto/c_fill,w_750/blogen/2018/10/33cfb02a-%E7%A7%81%E4%BA%BA%E5%AF%BC%E8%A7%88%E6%B5%B7%E4%B8%8A%E8%B7%B3%E5%B2%9B%E6%B8%B8.jpg"
            profileImage="https://imgcdn.stablediffusionweb.com/2024/3/12/91f69dac-3c3e-4bdc-93c3-fa8a3aa912d5.jpg" name="Facebook User"
            />
            <Story imgUrl="https://res.klook.com/image/upload/fl_lossy.progressive/q_auto/c_fill,w_750/blogen/2018/10/33cfb02a-%E7%A7%81%E4%BA%BA%E5%AF%BC%E8%A7%88%E6%B5%B7%E4%B8%8A%E8%B7%B3%E5%B2%9B%E6%B8%B8.jpg"
            profileImage="https://imgcdn.stablediffusionweb.com/2024/3/12/91f69dac-3c3e-4bdc-93c3-fa8a3aa912d5.jpg" name="Facebook User"
            />
            <Story imgUrl="https://res.klook.com/image/upload/fl_lossy.progressive/q_auto/c_fill,w_750/blogen/2018/10/33cfb02a-%E7%A7%81%E4%BA%BA%E5%AF%BC%E8%A7%88%E6%B5%B7%E4%B8%8A%E8%B7%B3%E5%B2%9B%E6%B8%B8.jpg"
            profileImage="https://imgcdn.stablediffusionweb.com/2024/3/12/91f69dac-3c3e-4bdc-93c3-fa8a3aa912d5.jpg" name="Facebook User"
            />
            <Story imgUrl="https://res.klook.com/image/upload/fl_lossy.progressive/q_auto/c_fill,w_750/blogen/2018/10/33cfb02a-%E7%A7%81%E4%BA%BA%E5%AF%BC%E8%A7%88%E6%B5%B7%E4%B8%8A%E8%B7%B3%E5%B2%9B%E6%B8%B8.jpg"
            profileImage="https://imgcdn.stablediffusionweb.com/2024/3/12/91f69dac-3c3e-4bdc-93c3-fa8a3aa912d5.jpg" name="Facebook User"
            />
        </div>
    )
}

export default Stories