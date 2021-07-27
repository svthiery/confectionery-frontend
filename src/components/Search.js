import { AnimatePresence, motion } from "framer-motion";

function Search({ showSearchModal }) {

    // const toRender = showSearchModal ? <div className="search-modal col-12">Search</div> : null
    const toRender = showSearchModal ? 
    <div className="row">
        <AnimatePresence>
    {showSearchModal && (
      <>
        <motion.div
          initial={{ y: "0%" }}
          animate={{
            y: "0%",
          }}
          exit={{
            y: "0%",
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="search-modal col-12"
        >
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.2 }}
          className="search-modal col-12 bg-transparent px-5 fixed h-full w-full flex items-center justify-center left-0"
        /> */}
      </>
    )}
  </AnimatePresence>
  </div> : null

    return (
        toRender
    );
}

export default Search;

