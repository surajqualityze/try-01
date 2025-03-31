export default async function ServerSideFetch() {
  const response = await fetch(
    "https://siteapi.qualityze.com/api/collections/posts/records"
  );
  const data = await response.json();
  console.log(data);
  const attachmentPath = "https://siteapi.qualityze.com/api/files/posts/";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">API Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {data.items.map((item) => {
          // Construct the image URL
          const imageUrl = `${attachmentPath}${item.id}/${item.banner}`;

          return (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={imageUrl}
                alt={item.title}
                className="mb-4 w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.summary}</p>
              <p className="text-gray-900 font-bold mt-2">
                Author: {item.author}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}



