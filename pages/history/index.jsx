/* eslint-disable react-hooks/exhaustive-deps */
import { PrivateRoute } from '../../components/hoc/PrivateRoute';
import { InputSearch2, SelectOption, buttonItemRender, localePagination } from '../../components/base';
import { CardContainer, CardTextOverlay, CardImgOverlay } from '../../components/module';
import { default as axios } from '../../configs/axiosConfig';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const History = (props) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [history, setHistory] = useState({ ...props.history });
  const [historySearch, setHistorySearch] = useState({
    search: '',
    fieldOrder: 'default',
  });
  const historySearchHandler = (e) => {
    setHistorySearch((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `/reservations?fieldOrder=${historySearch.fieldOrder ? historySearch.fieldOrder : ''}&search=${
          historySearch.search
        }&page=${page}`
      );
      setHistory({ ...data });
    } catch (error) {
      console.log(error);
    }
  }, [page, historySearch.search, historySearch.fieldOrder]);
  return (
    <>
      <section id="history" className="mt-margin-navbar-1 container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9">
            <div className="flex gap-3 flex-wrap md:flex-nowrap">
              <div className="w-full md:w-3/4">
                <InputSearch2 name="search" value={historySearch.search} onChange={historySearchHandler} />
              </div>
              <div className="w-1/2 md:w-1/4">
                <SelectOption
                  name="fieldOrder"
                  type="select"
                  styleArrow="!top-5"
                  styleContainer="!m-0"
                  styleInput="!text-black-1 !text-base !bg-white !pl-7 !py-2 border border-gray-300"
                  styleOption="!text-white !bg-white"
                  value={historySearch.fieldOrder}
                  onChange={historySearchHandler}
                  options={[
                    { label: 'default', value: 'default' },
                    { label: 'type', value: 'type' },
                    { label: 'name', value: 'name' },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col mt-5">
              {history?.data?.map((history, index) => (
                <div
                  onClick={() => router.push(`/history/${history.rental_id}`)}
                  key={index}
                  className="w-full flex gap-6 border rounded-xl mb-4 cursor-pointer"
                >
                  <div className="w-2/5 md:w-1/4">
                    <img
                      className="w-full h-40 rounded-xl bg-contain"
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${history.vehicle_image}`}
                      alt=""
                    />
                  </div>
                  <div className="w-3/5 md:w-3/4 flex flex-col font-Nunito text-xl pt-3">
                    <p className="font-bold truncate">{history.vehicles_name}</p>
                    <p className="text-gray-800">
                      {new Date(history.start_date).getDate()} to
                      {history.return_date ? ` ${new Date(history.return_date).getDate()} ` : ' ? '}
                      {new Date(history.start_date).getFullYear()}
                    </p>
                    <p className="pt-2 font-bold">Prepayment : Rp.{history.cost}</p>
                    {history.status === 'pending' && <p className="text-yellow-500">Status : {history.status}</p>}
                    {history.status === 'canceled' && <p className="text-red-600">Status : {history.status}</p>}
                    {history.status === 'approved' && <p className="text-green-1">Status : {history.status}</p>}
                    {history.status === 'returned' && <p className="text-green-1">Status : {history.status}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row w-full mt-10">
              {history?.pagination && (
                <Pagination
                  current={page}
                  total={history.pagination.countData}
                  pageSize={history.pagination.limit ? history.pagination.limit : 1}
                  itemRender={buttonItemRender}
                  onChange={(current, pageSize) => setPage(current)}
                  locale={localePagination}
                />
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 border">
            <p className="text-center mt-3 font-Playfair_Display font-bold text-grey-1">New Arrival</p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-y-6 p-6">
              <CardContainer styleCard="cursor-pointer">
                <CardImgOverlay src="/assets/img/cars/2.png" />
                <CardTextOverlay>
                  <p className="truncate font-semibold text-base">Lamborghini</p>
                  <p className="truncate text-grey-1">Jakarta Selatan</p>
                </CardTextOverlay>
              </CardContainer>
              <CardContainer styleCard="cursor-pointer">
                <CardImgOverlay src="/assets/img/cars/4.png" />
                <CardTextOverlay>
                  <p className="truncate font-semibold text-base">White Jeep</p>
                  <p className="truncate text-grey-1">Jakarta Selatan</p>
                </CardTextOverlay>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateRoute(History, ['user', 'admin']);
export async function getServerSideProps({ req }) {
  try {
    const { data: history } = await axios.get('/reservations', {
      withCredentials: true,
      headers: { Cookie: req.headers.cookie },
    });
    return {
      props: {
        history,
      },
    };
  } catch (error) {
    return {
      props: { history: [] },
    };
  }
}
