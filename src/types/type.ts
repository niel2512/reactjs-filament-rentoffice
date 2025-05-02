export interface Office {
  id: number;
  price: number;
  duration: number;
  name: string;
  address: string;
  slug: string;
  city: City; //disini gapake [] 1 office hanya memiliki 1 data city
  thumbnail: string;
  photos: Photo[]; //pake [] karena datanya > 1
  benefits: Benefit[];
  about: string;
}

interface Photo {
  id: number;
  photo: string;
}

interface Benefit {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
  slug: string;
  photo: string;
  officeSpaces_count: number;
  officeSpaces: Office[]; //pake [] karena 1 city bisa punya banyak office
}

export interface BookingDetails {
  id: number;
  name: string;
  phone_number: string;
  booking_trx_id: string;
  is_paid: boolean;
  duration: number;
  total_amount: number;
  started_at: string;
  ended_at: string;
  office: Office;
}
