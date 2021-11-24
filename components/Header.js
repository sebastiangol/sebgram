import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';
import ReactTooltip from 'react-tooltip';

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-md border-b-pink-900 bg-pink-800 sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div
          className="relative hidden lg:inline-grid h-15 w-24 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image src="/logoHeader.png" layout="fill" objectFit="contain" />
        </div>
        <div
          className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>
        {/* middle */}
        <div className="max-w-xs">
          <div className="relative flex mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className=" bg-pink-900 block w-full pl-10 sm:text-sm border-pink-900 rounded-md focus:ring-black focus:border-black placeholder-gray-300"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon
            className="navButton active:scale-95 transition-all duration-150 ease-out"
            onClick={() => router.push('/')}
            data-tip="Home"
            data-for="home"
          />

          {session ? (
            <>
              {/* <div className="relative navButton">
                <PaperAirplaneIcon className="navButton" />
                <div className="absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse">
                  2
                </div>
              </div> */}
              <PlusCircleIcon
                className="navButton active:scale-95 transition-all duration-150 ease-out"
                onClick={() => setOpen(true)}
                data-tip="Make Post"
                data-for="post"
              />
              <ReactTooltip
                id="post"
                place="bottom"
                type="dark"
                effect="float"
              />
              {/* <UserGroupIcon className="navButton" /> */}
              {/* <HeartIcon className="navButton" /> */}

              <img
                onClick={signOut}
                src={session.user.image}
                alt=""
                className="h-10 w-10 rounded-full cursor-pointer active:scale-95 transition-all duration-150 ease-out"
                data-tip="Sign Out"
                data-for="signOut"
              />
              <ReactTooltip
                id="signOut"
                place="bottom"
                type="dark"
                effect="float"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
