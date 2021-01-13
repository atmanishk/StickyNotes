import React from 'react'
import "./RightPane.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton"
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function RightPane() {
    const [{ array, weekday }, dispatch] = useStateValue();
    const [contentActive, setContentActive] = React.useState([]);
    const [textContent, setTextContent] = React.useState("");

    React.useEffect(() => {
        setContentActive(array?.filter(data => data.selected === true)[0]);
        setTextContent(array?.filter(data => data.selected === true)[0]?.content);
    }, [array]);

    const saveContent = () => {
        dispatch({
            type: actionTypes.MODIFY_CONTENT,
            data: {
                id: contentActive.id,
                date: new Date(),
                content: textContent,
                color: contentActive.color,
                selected: false
            }
        })
    }

    const deleteContent = () => {
        dispatch({
            type: actionTypes.DELETE_CONTENT,
            id: contentActive.id,
        })
    }
    return (
        <div className="rightpane">
            {
                array?.filter(data => data.selected === true).length > 0 ? (
                    array
                        ?.filter((data) => data.selected === true)
                        .map((finalData) => (
                            <div className="rightpane__card">
                                <div className="rightpane__cardColor"></div>
                                <div className="rightpane__cardIcon">
                                    <IconButton className="rightpane__cardIconButton"
                                        onClick={deleteContent}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                                <textarea
                                    className="rightpane__cardTextField"
                                    type="text"
                                    value={textContent}
                                    onChange={(event) => {
                                        setTextContent(event.target.value)
                                    }}
                                />
                                <div className="rightpane__cardDate">{weekday[finalData.date.getDay()]}, {finalData.date.getDate()} /
                            {finalData.date.getMonth() + 1}</div>
                                <div className="rightpane__cardButton">
                                    <Button
                                        variant="contained"
                                        color="default"
                                        size="small"
                                        startIcon={<SaveIcon />}
                                        onClick={saveContent} > Save
                                   </Button>
                                </div>
                            </div>
                        )
                        )
                ) : (
                        <div className="rightpanecard">
                            <div className="rightpanecardNoSelect">
                                <img
                                    src="https://www.clipartmax.com/png/small/11-112274_sticky-note-png-sticky-notes-with-a-transparent-background.png"
                                    alt=""
                                    className="rightpane__cardNoSelectImage"
                                />
                                <h1 className="">Select or Add a card</h1>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default RightPane;
