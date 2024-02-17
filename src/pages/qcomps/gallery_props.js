function Gallery_props({person}) {
  return (
    <div>
      <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={person.src}
          alt={person.name}
          width={person.width}
          height={person.height}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>{`Awards: ${person.award_count}`} </b>
            {person.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
     </div>
  )
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Gallery_props
            person = {{name: "Maria Skłodowska-Curie",
            src: 'https://i.imgur.com/szV5sdGs.jpg',
            width: 70,
            height: 70,
            profession: "physicist and chemist",
            award_count: 4,
            awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
            discovered: "polonium (element)"}} />
      <Gallery_props
            person = {{name: "Maria Skłodowska-Curie", src: 'https://i.imgur.com/szV5sdGs.jpg', width: 70, height: 70, profession: "physicist and chemist", award_count: 4,awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)", discovered: "polonium (element)"}} />

    </div>
  );
}


//export default function Gallery() {
//  return (
//    <div>
//      <h1>Notable Scientists</h1>
//      <section className="profile">
//        <h2>Maria Skłodowska-Curie</h2>
//        <img
//          className="avatar"
//          src='https://i.imgur.com/szV5sdGs.jpg'
//          alt="Maria Skłodowska-Curie"
//          width={70}
//          height={70}
//        />
//        <ul>
//          <li>
//            <b>Profession: </b>
//            physicist and chemist
//          </li>
//          <li>
//            <b>Awards: 4 </b>
//            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//          </li>
//          <li>
//            <b>Discovered: </b>
//            polonium (element)
//          </li>
//        </ul>
//      </section>
//      <section className="profile">
//        <h2>Katsuko Saruhashi</h2>
//        <img
//          className="avatar"
//          src='https://i.imgur.com/YfeOqp2s.jpg'
//          alt="Katsuko Saruhashi"
//          width={70}
//          height={70}
//        />
//        <ul>
//          <li>
//            <b>Profession: </b>
//            geochemist
//          </li>
//          <li>
//            <b>Awards: 2 </b>
//            (Miyake Prize for geochemistry, Tanaka Prize)
//          </li>
//          <li>
//            <b>Discovered: </b>
//            a method for measuring carbon dioxide in seawater
//          </li>
//        </ul>
//      </section>
//    </div>
//  );
//}
