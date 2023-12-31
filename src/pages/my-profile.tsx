import Profile from "@/components/Profile/Profile";
import { getProfileSSRProps } from "@/fetch-data/profile-props";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await getProfileSSRProps(context);
}

export default Profile;
