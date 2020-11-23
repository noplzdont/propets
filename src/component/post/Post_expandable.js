import React, {useEffect, useState} from 'react';
import style from "../../module/post_expandable.module.css";
import IMAGE from "../../images/image_dog_wide.png";

const SHORT = "SHORT";
const LONG = "LONG";

const PostExpandable = () =>
{
    const [textFull, setTextFull] = useState("orem Ipsum is simply dummy text of the printing and typesetting\n" +
        "                                              industry. Lorem Ipsum has been the\n" +
        "                                              industry’s standard dummy text ever since the 1500s, when an unknown\n" +
        "                                              printer took a galley of type\n" +
        "                                              and scrambled it to make a type specimen book. It has survived not\n" +
        "                                              only five centuries, but also the\n" +
        "                                              leap into electronic typesetting, remaining essentially unchanged. It\n" +
        "                                              was popularised in the 1960s\n" +
        "                                              with the release of Letraset sheets containing Lorem Ipsum passages,\n" +
        "                                              and more recently with desktop\n" +
        "                                              publishing software like Aldus PageMaker including versions of Lorem\n" +
        "                                              Ipsum. Why do we use it? It is a\n" +
        "                                              long established fact that a reader will be distracted by the readable\n" +
        "                                              content of a page when looking\n" +
        "                                              at its layout. The point of using Lorem Ipsum is that it has a\n" +
        "                                              more-or-less normal distribution of\n" +
        "                                              letters, as opposed to using ‘Content here, content here’, making it\n" +
        "                                              look like readable English. Many\n" +
        "                                              desktop publishing packages and web page editors now use Lorem Ipsum\n" +
        "                                              as their default model text, and\n" +
        "                                              a search for ‘lorem ipsum’ will uncover many web sites still in their\n" +
        "                                              infancy. Various versions have\n" +
        "                                              evolved over the years, sometimes by accident, sometimes on purpose\n" +
        "                                              (injected humour and the like).\n" +
        "                                              Contrary to popular belief, Lorem Ipsum is not simply random text. It\n" +
        "                                              has roots in a piece of\n" +
        "                                              classical Latin literature from 45 BC, making it over 2000 years old.\n" +
        "                                              Richard McClintock, a Latin\n" +
        "                                              professor at Hampden-Sydney College in Virginia, looked up one of the\n" +
        "                                              more obscure Latin words,\n" +
        "                                              consectetur, from a Lorem Ipsum passage, and going through the cites\n" +
        "                                              of the word in classical\n" +
        "                                              literature, discovered the undoubtable source. Lorem Ipsum comes from\n" +
        "                                              sections 1.10.32 and 1.10.33 of\n" +
        "                                              “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by\n" +
        "                                              Cicero, written in 45 BC. This\n" +
        "                                              book is a treatise on the theory of ethics, very popular during the\n" +
        "                                              Renaissance. The first line of\n" +
        "                                              Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in\n" +
        "                                              section 1.10.32. The standard chunk\n" +
        "                                              of Lorem");
    const [textShort, setTextShort] = useState(textFull.slice(0, 400));
    const [text, setText] = useState(textShort);
    const [flagTextSize, setFlag] = useState(SHORT);

    useEffect(() =>
    {
        flagTextSize === SHORT && setText(textShort);
        flagTextSize === LONG && setText(textFull);
    }, [flagTextSize]);

    const handleSpanMoreClick = () =>
    {
        flagTextSize === SHORT && setFlag(LONG);
        flagTextSize === LONG && setFlag(SHORT);
    }

    return (
        <div className = {style.div_wrapper}>
            <div className = {style.div_options_wrapper}>
                <div className = {style.div_profile}>
                    Name Surname
                </div>
                <div className = "dropdown">
                    <a className = {style.button_options}
                       data-toggle = "dropdown">
                        <i className = "fas fa-ellipsis-h"/>
                    </a>
                    {/*<ul className = "dropdown-menu">
                        <li>
                            <li><a>Page 1-1</a></li>
                            <li><a>Page 1-2</a></li>
                            <li><a>Page 1-3</a></li>
                        </li>
                    </ul>*/}
                </div>
            </div>
            <div className = {style.div_image_wrapper}>
                <img className = {style.img_photo} src = {IMAGE}/>
            </div>
            <div className = {style.div_text_wrapper}>
                <p className = {style.p_text}>
                    {text}
                    <span className = {style.span_more}
                          onClick = {handleSpanMoreClick}>
                    <i className = "fas fa-ellipsis-h"/>
                </span>
                </p>
            </div>
        </div>
    );
};

export default PostExpandable;
