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
            href="https://www.instagram.com/"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Send a Request
          </a>
       </Card>
       <Card bg='bg-gray-300-'>
       <h2 className="text-2xl font-bold">For Business</h2>
          <p className="mt-2 mb-4">
            We are all up to some incredible things! Please connect with me in a way that works best for you!
          </p>
          <a
            href="https://github.com/toussaint93"
            className="inline-block bg-gray-500 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
          >
            Please Connect
          </a>
       </Card>
      </div>
    </div>
  </section>
  );
}

export default HomeCards;