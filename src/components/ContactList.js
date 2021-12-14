import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchUsers } from "../api/user";
import Contact from "./Contact";

const ContactList = () => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log("Visible");
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const observer = useRef();

  useEffect(() => {
    setIsLoading(true);
    
    const fetchItems = async () => {
      try {
        const result = await fetchUsers(`limit=10&page=${pageNumber}`);

        // set states for application
        setResponse(response => [
            ...response,
            ...result.data.data
        ]);

        const remains =
          result.data.total - result.data.limit * result.data.page;
        const doesHasMore = remains > 0;

        console.log(doesHasMore);

        setHasMore(doesHasMore);
        setIsLoading(false);
        console.log("API Response: ", result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems(pageNumber);
  }, [pageNumber]);

  return (
    <>
      <div>
        {response !== undefined &&
          response.map((item, index) => {
            if (response.length === index + 1) {
              return (
                <div ref={lastElementRef} key={item.id}>
                  <Contact item={item} />
                </div>
              );
            } else {
              return (
                <div className="card-container" key={item.id}>
                  <Contact item={item} />
                </div>
              );
            }
          })}
      </div>
      <div>{isLoading && "Loading..."}</div>
    </>
  );
};

export default ContactList;
