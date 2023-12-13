import cl from './About.module.css'

const About = () => {
  return (
    <div className={cl.container}>
        <div className={cl.photo__container}>
                    <img className={cl.photo}  src="/pers_photo1.jpg" alt="myself" />
        </div>
        <p className={cl.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget vehicula nisl. Donec pulvinar, orci quis accumsan aliquam, augue mi placerat erat, ornare iaculis magna massa et odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam a nibh vitae justo dignissim pharetra. Ut sagittis sapien sem, eu dictum est tempus iaculis. Aenean tincidunt est in rhoncus venenatis. Nunc pretium venenatis massa et volutpat. Nunc rutrum ut arcu nec vulputate. Fusce pretium arcu at cursus imperdiet. Maecenas hendrerit diam vitae mauris sagittis, at sollicitudin erat tempus. Sed condimentum rhoncus odio vitae scelerisque.
        Aenean dictum enim quis leo pulvinar lacinia. Sed urna nunc, porta a iaculis consectetur, lobortis quis sem. Cras ornare, metus eu congue dictum, ex ante molestie lectus, nec gravida nulla nisl a lectus. Duis elit sapien, vestibulum eu laoreet sit amet, volutpat eu nulla. Suspendisse potenti. Nunc eget enim vel arcu fringilla rhoncus sed eget tortor. Sed rutrum enim ut velit lacinia, non commodo mauris maximus

Aenean dictum enim quis leo pulvinar lacinia. Sed urna nunc, porta a iaculis consectetur, lobortis quis sem. Cras ornare, metus eu congue dictum, ex ante molestie lectus, nec gravida nulla nisl a lectus. Duis elit sapien, vestibulum eu laoreet sit amet, volutpat eu nulla. Suspendisse potenti. Nunc eget enim vel arcu fringilla rhoncus sed eget tortor. Sed rutrum enim ut velit lacinia, non commodo mauris maximus.</p>
      </div>
  );
};

export default About;
