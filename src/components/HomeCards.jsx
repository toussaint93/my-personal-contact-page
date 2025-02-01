import Card from './Card';


function HomeCards() {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
       <Card>
       <h2 className="text-2xl font-bold">For Social</h2>
          <p className="mt-2 mb-4">
            Please check out the ways to connect with me socially, and choose a option that works best for you!
          </p>
          <a
            
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Connect
          </a>
       </Card>
       <Card bg='bg-indigo-100'>
       <h2 className="text-2xl font-bold">For Business</h2>
          <p className="mt-2 mb-4">
            We are all up to some incredible things! Please connect with me in a way that works best for you!
          </p>
          <a
            href="/add-job.html"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Please Contact
          </a>
       </Card>
      </div>
    </div>
  </section>
  );
}

export default HomeCards;