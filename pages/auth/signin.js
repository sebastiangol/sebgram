import Head from 'next/head';
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import Header from '../../components/Header';

function signIn({ providers }) {
  return (
    <div className="bg-pink-900 h-screen">
      <Head>
        <title>Sebgram</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      {console.log(providers)}
      <div className="flex flex-col items-center mt-40">
        <img className="w-80 -mb-7" src="/logoHeader.png" alt="" />
        <div className="mt-20">
          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  };
}

export default signIn;
