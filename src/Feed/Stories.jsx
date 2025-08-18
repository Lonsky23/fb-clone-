import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [page, setPage] = useState(0)
  const size = 4

 const stories = [
    {
      imgUrl: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Alice Harper"
    },
    {
      imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Marcus Li"
    },
    {
      imgUrl: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Sophie Nguyen"
    },
    {
      imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg",
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Ethan Patel"
    },
    {
      imgUrl: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Luna García"
    },
    {
      imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Noah Müller"
    },
    {
      imgUrl: "https://xsgames.co/randomusers/assets/avatars/female/7.jpg",
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=female",
      name: "Zara Ahmed"
    },
    {
      imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=male",
      name: "Leo Kim"
    }
  ];


    const start = page * size
    const visible = stories.slice(start, start + size)



  const handleNext = () => {
    if ((page + 1) * size < stories.length) {
      setPage(page + 1);
    }

  }


  const handlePrevious = () => {
    console.log(page)
    if (page > 0) {
      setPage(page - 1);
    }

  }

    return(
        <div className="h-50 flex w-full relative">
            <div className="bg-white rounded-full absolute left-3 top-20 z-50 hover:bg-[#F2F2F2] cursor-pointer flex justify-center">
              <button onClick={handlePrevious} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"> 
                <ChevronLeft/>
              </button>
            </div>
            <div className="w-full flex gap-2">
            {visible.map((story,index) => (
              <Story 
              key={index}
              imgUrl={story.imgUrl} 
              profileImage={story.profileImage}
              name={story.name}/>
            ))}
            </div>
           
          <div className="bg-white rounded-full absolute right-3 top-20 z-50 hover:bg-[#F2F2F2] flex justify-center items-center">
            <button onClick={handleNext} className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center">
              <ChevronRight />
            </button>
          </div>

        </div>
    )
}

export default Stories