// import faker from 'faker';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Story from './Story';

function Stories() {
  const { data: session } = useSession();

  const userProfiles = [
    {
      username: 'Mario.Turcotte',
      avatar:
        'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg',
      id: 0
    },
    {
      username: 'Abelardo_MacGyver',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      id: 1
    },
    {
      username: 'Tom46',
      avatar:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      id: 2
    },
    {
      username: 'Vern76',
      avatar:
        'https://images.pexels.com/photos/166277/pexels-photo-166277.jpeg',
      id: 3
    },
    {
      username: 'Damian42',
      avatar:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      id: 4
    },
    {
      username: 'Milo_Bartoletti71',
      avatar:
        'https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg',
      id: 5
    },
    {
      username: 'Reese.Heathcote',
      avatar:
        'https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg',
      id: 6
    },
    {
      username: 'Skylar23',
      avatar:
        'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg',
      id: 7
    },
    {
      username: 'Kirstin.Farrell',
      avatar:
        'https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg',
      id: 8
    },
    {
      username: 'Georgianna.Brekke',
      avatar:
        'https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg',
      id: 9
    },
    {
      username: 'Freeman45',
      avatar:
        'https://images.pexels.com/photos/52718/angel-wings-love-white-52718.jpeg',
      id: 10
    },
    {
      username: 'Corbin_Hackett',
      avatar:
        'https://images.pexels.com/photos/3970387/pexels-photo-3970387.jpeg',
      id: 11
    },
    {
      username: 'Glennie13',
      avatar:
        'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg',
      id: 12
    },
    {
      username: 'Janis34',
      avatar:
        'https://images.pexels.com/photos/10476052/pexels-photo-10476052.jpeg',
      id: 13
    },
    {
      username: 'Elliot.Kozey',
      avatar:
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      id: 14
    },
    {
      username: 'Omari.Langworth86',
      avatar:
        'https://images.pexels.com/photos/9662859/pexels-photo-9662859.jpeg',
      id: 15
    },
    {
      username: 'Madalyn49',
      avatar:
        'https://images.pexels.com/photos/9854141/pexels-photo-9854141.jpeg',
      id: 16
    },
    {
      username: 'Heber_McCullough',
      avatar:
        'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
      id: 17
    },
    {
      username: 'Mark.Volkman65',
      avatar:
        'https://images.pexels.com/photos/7517841/pexels-photo-7517841.jpeg',
      id: 18
    },
    {
      username: 'Drew_Koelpin',
      avatar:
        'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg',
      id: 19
    }
  ];

  console.log(userProfiles);

  // const [suggestions, setSuggestions] = useState([]);

  // useEffect(() => {
  //   const suggestions = [...Array(20)].map((_, i) => ({
  //     ...faker.helpers.contextualCard(),
  //     id: i
  //   }));

  //   setSuggestions(suggestions);
  //   const suggestionsJSON = JSON.stringify(suggestions);
  //   console.log(suggestionsJSON);
  // }, []);

  return (
    <div className="flex space-x-2 p-6 bg-pink-800 mt-8 border-pink-900 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {userProfiles.map(profile => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;

// export async function getServerSideProps() {
//   const lol = await fetch('https://jsonkeeper.com/b/2JKP').then(res =>
//     res.json()
//   );

//   return {
//     props: {
//       lol
//     }
//   };
// }
