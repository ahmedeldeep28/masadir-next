import Image from "next/image";

export default function FetchState({
  isLoading = false,
  isError,
  isEmpty,
  errorMessage = "حدث خطأ أثناء تحميل البيانات",
  errorImage = "/server_down.svg",
  emptyMessage = "لا توجد بيانات لعرضها",
  emptyImage = "/images/empty.svg",
  onRetry,
  children,
}) {
  if (isLoading) {
    return (
      <div>
        <div>loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="row py-4 d-flex flex-column align-items-center">
        <div className="col-md-6 text-center ">
          <Image
            src={`${errorImage}`}
            layout="responsive"
            width={400}
            height={400}
            alt={errorMessage}
          />
          <h5 className="fs-h2 mt-3">{errorMessage}</h5>
          {onRetry && (
            <button onClick={onRetry} className="btn">
              إعادة المحاولة
            </button>
          )}
        </div>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="row py-4 d-flex flex-column align-items-center">
        <div className="col-md-6 text-center ">
          <Image
            src={`${emptyImage}`}
            layout="responsive"
            width={400}
            height={400}
            alt={emptyMessage}
          />
          <h5 className="fs-h2 mt-3">{emptyMessage}</h5>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
