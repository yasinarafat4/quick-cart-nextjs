import "server-only";
import DbConnect from "./DbConnect";


// Getting All Categories Data From DB
export const getCategoriesFromDb = async () => {
  const db = await DbConnect();
  const categoriesCollection = db.collection("categories");
  return categoriesCollection.find({}).toArray();
};
