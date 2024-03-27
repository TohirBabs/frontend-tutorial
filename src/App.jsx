
function App() {

  return (
    <div className="bg-black w-screen h-screen">


Frontend Development Presentation
Calculated Time Duration - 15 mins.

Frontend Development is building the part of an application that runs on the user’s device (a.k.a the client). This mostly includes building the interface, coding frontend logic and writing code to interact with servers.

What is a client?
What is a server?
What is logic?
What is code?

There are a lot of basics to understand to properly understand “Frontend Development” But because of time, we’ve compressed these prerequisites into 2 very short and oversimplified stories.

The Internet
Modern Product Development

Then, with more clarity, we’ll return to “The Client, " our speciality as Frontend Developers.

The Internet - Short Story
The internet started as a research tool for sharing research papers between top research institutions and it was simply a wire connecting 2 far away computers together. 



Little by little, more institutions wanted to join this network and they had to lay more wires across more distance.




A few things happened at this point.


1.	ISPs
They knew the network was going to keep growing so they needed to outsource the laying of the wires that connected the computers. That led to the birth of ISPs (Internet service providers). These are companies responsible for laying the wires that make up the internet. These people will measure the amount of data you are transferring across their wires in Bytes, MegaBytes, GigaBytes etc and charge you based on that. I’m sure you know some of these guys. MTN, Glo and Co.


2. Fiber Optic Cables
As the volume of data and the distance of transfer kept increasing, they needed a more efficient means of high capacity and long-distance data transfer and that was how the fibre optic cables were invented.
3. ITP
They needed a standard for computer communication to make sure the computers understood each other's requests and responses. This led to the Invention of ITP (Internet Transfer Protocol) which later birthed HTTP (Hypertext Transfer Protocol) and HTTPS (Hypertext Transfer Protocol Secure).


4. Markup Languages
They also needed a standard for the documents being transferred so the computers could always be able to interpret and display each other’s documents. This led to the development of Markup Languages. The most popular one we know today is HTML (Hypertext Markup Language).



H1 - Header
P - Paragraph
A - Link / Anchor tag.


We’ll talk more about them in a minute.
5. Servers
Now for me to be able to request a document from another computer anytime and get a response, that computer has to:
Always be on
Always be connected to the internet

The cost of everyone individually keeping their computers on and connected to the internet was very expensive. So they came up with an idea. Why don’t we have a central computer that everyone can upload their documents to and everyone else can request these documents from these central computers whenever they need it. Now instead of having to keep everyone’s computer always on and connected to the internet, we just have to keep these handful of central computers on and always connected to the internet helping to save cost and energy. These central computers are what we refer to as “Servers”.

They are also sometimes called “Cloud”. Companies that run these servers on your behalf are called “Cloud Providers”. So, every time you have a document or app you want to make available at all times on the internet, You can just upload it to the cloud and the cloud providers will handle all that headache of making your resource available 24/7.





Okay. That’s enough basics for now. 
The internet keeps  evolving and newer technologies are constantly being invented and incorporated into the internet we have and use today, such as CDN, Databases, IP, DNS, e.t.c.




Fast forward to today.
What does “Modern Software Product Development” look like?

Let’s say we’re designing a new application from scratch. The process always goes like this:

Ideation
Design
- System Design - (Server Design - System Architect)
- Interface Design - (Client Design - UI/UX Designers)
Development
- Backend Development (Servers - Backend Developers)
- Frontend Development (Client - Frontend Developers)


The major thing to note is that front-end development comes last. As a front-end developer, you are expected to tie together all the efforts of all the engineers before you to deliver the final working product.





Now let’s take a deep dive into what you’ll be doing.
As we’ve mentioned, you are responsible for building the part of an application that runs on the user’s device (a.k.a the client).

Now there are 3 main places that your application can run on the client:
The OS (Operating System)
Game Engines
The Browser

Now if your app is meant to run on an Operating System, then you are building a native application and the way this is built depends on the Operating System of the end user. Some common Operating Systems and the programming languages of frameworks used to build their apps are:

Android - Android Apps with Java and Android Studio
iOS - iPhone app with Swift and X-Code
Windows - …. Ask Lucky to list some

For game engines that’s for game developers - Ask Ire to list some.

But the most common and easiest of all is building for the Browser.

Now let’s talk about your arsenal:

Like we mentioned earlier, we have HTML - Which defines the content and structure of your interface.
Then we Have CSS (Cascading Style Sheet) - Which is used to beautify your markup
Then we have Javascript - Which is a programming language used to add functionality to your client side application.

And to write all this code we need what is called a text editor: The most popular text editor used is VS code.

Next up, a little hands on session. To see all these things in action we will build a simple page.

DEMO
- Open VS code and create a simple HTML page.
- HTML
- CSS
- Quick JS and HTTP API implementation
- Then finally deploy to netlify to show an example of a cloud provider
- Then send the deployed address for everyone to access.

To demonstrate how it’s done in a formal setting - we can do a quick random quote generator

We can assume the following design came from our Designer…





And this API came from our backend developer.
https://github.com/lukePeavey/quotable?tab=readme-ov-file#get-random-quote


Quick Build
Send the Deployed link.



Then we can have a career road map, tips, important skills and resources sections. (We may skip this cause of time, or i go run am for the slides(Lana))


Thank you! The End.

    </div>
  )
}

export default App
