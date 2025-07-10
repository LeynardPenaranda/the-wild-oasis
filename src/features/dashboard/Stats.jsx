import PropTypes from "prop-types";
import Stat from "./Stat";
import { HiBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiCalendarDays, HiOutlineBanknotes } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

//eslint-disable-next-line
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //eslint-disable-next-line
  const numBookings = bookings?.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const totalCheckIns = confirmedStays.length;
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sale"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check Ins"
        color="indigo"
        icon={<HiCalendarDays />}
        value={totalCheckIns}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;

Stats.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string,
      extrasPrice: PropTypes.number,
      totalPrice: PropTypes.number,
    })
  ),

  confirmedStays: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      cabinId: PropTypes.number,
      cabinPrice: PropTypes.number,
      created_at: PropTypes.string,
      endDate: PropTypes.string,
      extrasPrice: PropTypes.number,
      guestId: PropTypes.number,
      guests: PropTypes.shape({
        fullName: PropTypes.string,
      }),
      hasBreakfast: PropTypes.bool,
      isPaid: PropTypes.bool,
      numGuests: PropTypes.number,
      numNights: PropTypes.number,
      observations: PropTypes.string,
      startDate: PropTypes.string,
      status: PropTypes.string,
      totalPrice: PropTypes.number,
    })
  ),
  numDays: PropTypes.number,
  cabinCount: PropTypes.number,
};
