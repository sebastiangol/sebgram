import { useEffect, useState } from 'react';
// import faker from 'faker';

function Suggestions() {
  const suggestions = [
    {
      id: 0,
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      username: 'Shanel_Rolfson',
      company: 'Raynor LLC'
    },
    {
      id: 1,
      avatar:
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      username: 'Kip_Wilkinson47',
      company: 'Schamberger - Schumm'
    },
    {
      id: 2,
      avatar:
        'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg',
      username: 'Lempi_Borer67',
      company: 'Emard, Goldner and Zieme'
    },
    {
      id: 3,
      avatar:
        'https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg',
      username: 'Nyasia.Bogisich52',
      company: 'Lemke and Sons'
    },
    {
      id: 4,
      avatar:
        'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg',
      username: 'Kayla_Schimmel41',
      company: 'Gibson - Rowe'
    }
  ];

  // const [suggestions, setSuggestions] = useState([]);

  // useEffect(() => {
  // const suggestions = [...Array(5)].map((_, i) => ({
  //   ...faker.helpers.contextualCard(),
  //   id: i
  // }));

  // setSuggestions(suggestions);
  // console.log(suggestions);
  // }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-blue-600 font-bold">See All</button>
      </div>

      {suggestions.map(profile => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            alt=""
            className="w-10 h-10 rounded-full border-2 border-black p-[2px]"
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>

          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
