import { useParams } from "react-router-dom";
import Goodsdetail from "./shop/Goodsdetail";
import data from "../goodsdata";
import DetailTab from "./shop/DetailTab";

export default function GoodsDetailPage(props) {
  return (
    <>
      <Goodsdetail goods={data} />
      <DetailTab goods={data} />
    </>
  );
}
