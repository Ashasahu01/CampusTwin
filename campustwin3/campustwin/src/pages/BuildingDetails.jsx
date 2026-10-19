import { useParams } from "react-router-dom";
import PagePlaceholder from "../components/UI/PagePlaceholder";

export default function BuildingDetails() {
  const { id } = useParams();
  return (
    <PagePlaceholder
      title={`Building Details — ${id}`}
      description="Occupancy, energy, room availability, and historical charts will appear here."
    />
  );
}
