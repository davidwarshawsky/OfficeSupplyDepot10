public class ShippingMethod {

    public static String getApplicableShippingMethods(double cartTotal, double weightInPounds) {

        // create some booleans to track eligibility for different shipping methods
        boolean truck1 = false;
        boolean truck2 = false;
        boolean drone = false;
        boolean extra = false;
        double extraShippingCost = 0.0;

        // if the cart total is over $100, you can get same-day or 2-day truck delivery for free!
        if (cartTotal >= 100) {
            truck1 = true;
            truck2 = true;
        }

        // if the weight is under 15 pounds, you can get same-day drone delivery for free!
        if (weightInPounds <= 15) {
            drone = true;
        }

        // if you're not eligible for any of the other methods, you'll have to pay extra
        if (!truck1 && !truck2 && !drone) {
            extra = true;
            extraShippingCost = 20.0;
        }

        // build a string that lists all the eligible shipping methods
        StringBuilder shippingMethods = new StringBuilder();
        shippingMethods.append("Shipping Methods: ");
        shippingMethods.append("Pickup");

        // if eligible, add same-day truck delivery to the list
        if (truck1) {
            shippingMethods.append(", Same-day truck delivery ($25)");
        }

        // if eligible, add 2-day truck delivery to the list
        if (truck2) {
            shippingMethods.append(", 2-day truck delivery (free)");
        }

        // if eligible, add same-day drone delivery to the list
        if (drone) {
            shippingMethods.append(", Same-day drone delivery (free)");
        }

        // if you have to pay extra, add that to the list too
        if (extra) {
            shippingMethods.append(", Extra shipping ($" + extraShippingCost + ")");
        }

        // return the list of eligible shipping methods as a string
        return shippingMethods.toString();
    }
}

