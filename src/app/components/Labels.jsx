

const Labels = ({
    height,
    width,
    text,
    textColor = "black", // Default text color
    backgroundColor = "bg-white", // Default background color
    borderRadius = "0", // Default border radius
}) => {
    return (
        <div
            style={{
                height: height,
                width: width,
                borderRadius: borderRadius,
            }}
            className={`p-2 ${backgroundColor} text-${textColor} flex items-center justify-center`}
        >
            {text}
        </div>
    );
};

export default Labels;
