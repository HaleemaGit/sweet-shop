import { Layout } from '../../components/layout/layout';
import { useAuth } from '../../hooks/useAuth';

export default function SignIn() {
  const { signIn, session } = useAuth();
  const handleSignIn = () => {
    signIn('google');
  };

  return (
    // <Layout>
    <div>
      {!session && (
        <button
          onClick={handleSignIn}
          className="mt-6 group outline-none relative flex justify-center p-4 px-4 w-full text-white transition-colors duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-orange-900"

        >
          Tap here to explore our sweetening offers
        </button>
      )}
    </div>
    // </Layout>
  );
}
