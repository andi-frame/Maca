// eslint-disable-next-line react/prop-types
function PageBookCounter({numPages, pageNumber}) {
  return (
    <div className="mt-3 text-center">
      <span className="text-xl font-medium">{pageNumber}/{numPages}</span>
    </div>
  );
}

export default PageBookCounter;
