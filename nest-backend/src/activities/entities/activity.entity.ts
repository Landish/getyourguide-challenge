/**
 * Represents an activity.
 */
export class Activity {
  /**
   * The ID of the activity.
   */
  id: number;

  /**
   * The title of the activity.
   */
  title: string;

  /**
   * The price of the activity.
   */
  price: number;

  /**
   * The currency of the price.
   */
  currency: string;

  /**
   * The rating of the activity.
   */
  rating: number; // double

  /**
   * Indicates if the activity has a special offer.
   */
  specialOffer: boolean;

  /**
   * The ID of the supplier of the activity.
   */
  supplierId: number;
}
