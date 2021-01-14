import React from "react";

export class Map extends React.Component {
    render() {
        if (this.props.currentTap !== "") {
            const unBlackedElement = document.getElementsByClassName("blacked");
            const blackedElement = document.getElementsByClassName(this.props.currentTap);
            console.log(unBlackedElement);
            if (unBlackedElement.length !== 0) {
                unBlackedElement[0].classList.remove("blacked");
                unBlackedElement[0].classList.remove("blacked");
            }
            blackedElement[0].classList.add("blacked");
            blackedElement[1].classList.add("blacked");
            console.log(blackedElement);
        }
        return (
            <div className="map-background">
                <svg className="map-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1035.23 722.8">
                    <path id="US-AK" className={"block-3 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-3"
                    }).voteOwner}
                          onMouseDown={(event) => {this.props.eventReturn(event, event.currentTarget)}}
                          d="M135.22,461.27l2.87,8.43,3-3,9.45,2.36-.85,3.93,8.45,4,6.07-1.1L176,482.45l11.14,2.37,4.41,2.47,7.93-2.48,8.81,5.39,6.42,2.46h0l-.29,61.92L214,644.42l7.5.44L229,649l5.52,6.58,7.22,9.78,7.24-8.8,7.5-5.33,4.57,7.63,5.67,5.86,7.72,6.27,5.88,10.36,9.87,16.24,15,7.91,1.32,9.26-3.88,7.62-5.24-5-7.87-4L286,700.73,274.4,689.59,269,675.76l-7.71-.46-12.67.3-9.46-4-16.5-15.44-7.41-2.87-13.37-5.62-10.64,1-14.65-7.75-8.54-7.13-8.59,2.6.69,10.76-4.31.62-9.17,2.34-7.32,4.4-9,2.21v-9.05l5.22-14.52,8.47-3.82-1.62-4.08L132,632.68l-6.45,9.48L113,651.36l4.61,8.12-9,9.68-9.49,4.89-8.73,3.17-3.13,6.19-14,5.24L69.35,695l-10.87,4.25-5.39-2.33-8.57,2.31L35,702.15l-8.06,3.09-15.29.34L11,702.84l10.79-4.25L31,696.22l10.61-5.76,10.46.68,5.31-5.08,13-6.42,2.37-2.58L79.55,673,83,662,88.61,654l-9.78,2.83-2-3-5.29,4.55-3.47-8.58-3.22,4.87-1.26-8-9,4.19-4.71-1.12,1.45-8.95L54,635.59l-3.54-6.46-10.41.39-4.4-8.61-4-4.93,2.31-8.42-3.72-7.91,5.2-7.81L43.46,585,48,577.9l5.87.36L58,581.92l7.39-6,4.68,2.52,6.33-3.59.34-7.37-3.13-3.67L80,558.91l-4.14-.76L68,559.85l-2.89,2.92L60.65,558l-9.88-.77-8.65-6.44-.92-7-5.42-11.46,10.92-3.79L63,524.84l5.19,1.37-2.92,7.67,13.69,2.75-2.8-11.1-6.17-8-2.27-9.16-4-8.45L57,492.44l5.78-7.51,10.57,2.37,9.34-5.56L86.07,474l7.78-6.53,6-.64,12.31-5.24,4.93,2.18,10.31-7.58ZM2.69,553.18l3.09,4.29,4.68-.11,4.08,5.78,6,4.18-1.08,1.46-6.17,1.5-4.07-5-1.64-3.58-6.21-1.19L.28,558.66Zm24.78,71.14-5.19,1-4-4.16L15,615.83l8-.37,5.42,3Zm88.74,61.58-8.89,4.49L103.76,686l-.17-7.13,8-4.19,4.56-1.67,5.13,1.72,2.78,5.07Z"/>
                    <path id="US-AL" className={"block-14 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-14"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M766.67,368.91l8.12,27.47L782,418.31l3.6,6.75,2.17,3.84L785,433.26l-.21,7.34,1.56,4.14v4.07l-.08,3.78,1.58,2.75,1.29,2.56-39.93,4.54-11.09,2.37-.15,1.76,5,5.12-.61,4.59-1.14,3.26-17.79-1-3.52-34.73.32-36.57.82-29.65-1.71-4.27,23.4-2.17Z"/>
                    <path id="US-AR" className={"block-13 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-13"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M689.87,352.35l-.06,1.89-1.65,3.32L685.07,360l-.46,3.8L681.87,367l.65,6.58-2,2.25-.24,1.82-3.23,1.9.13,3.29L675.05,389l-2.1,1.42-3.15,3.28-1.74,4.79-3.7,8.15-.15,5.41,2.51,5.85-.68,4.52-16.23,0L628.89,424l-18.53.45.83-12.94h-4.41l-3.69.37-1-1.47.21-19.9,0-22.1-4-23.93,22.26-.16,20.24-.64,19.31-.89L681,343l1.71,2.7-1.91,2.57-1.9,2.58-1,2.32Z"/>
                    <path id="US-AZ" className={"block-4 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-4"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M336.63,317.25,318.24,444.68l-38.39-5.86-41-23.7-26.48-16.65,2.63-3.92,2.5.55,3-4-2.68-3.76,0-3.48-.15-4.13,4.7-4.36,3.58-9.89,6.55-3.43-2.62-5-1.52-4.68-.71-4.21-.38-3.22,0-2.07,2-4.13v-4.54l.52-4.39,1-4.78-1-3.38,1.81-2.48,3.79.78,3.14,2.29L241,323.6l1.88-3.15.93-.58L247.24,302l28.88,5.19,34.44,6Z"/>
                    <path id="US-CA" className={"block-2 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-2"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M171.16,167.61l-17.77,65.65,24.91,38.1,24.81,36.73,24.25,34.76,0,2.07.38,3.22.71,4.21,1.52,4.68,2.62,5L226,365.45l-3.58,9.89-4.7,4.36.15,4.13,0,3.48,2.68,3.76-3,4-2.5-.55-24.4-2.83-21.77-3.21-.34-8.7-5.13-13.35L147,348.36l-7.17-2.72-6.12-9-13.93-5.57-3.65-4.82,1.14-12.6-11-26.87-5.61-34.54,2.12-4.85-5.41-9.47L89.8,215.69l3.25-18.36L88,182.7l9.37-16.76,5.37-18.71Z"/>
                    <path id="US-CO" className={"block-6 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-6"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M467.68,262.7l-2.15,34.87-2.23,33.22-17.45-1.33-21.7-1.85-30.77-3.09-28.54-3.44-28.21-3.83,12.84-89.85,17.07,2.36,17.08,2.18,34.23,3.78L435,237.33,469.23,240l-1.51,22Z"/>
                    <path id="US-CT" className={"block-25 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-25"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M978.26,166.27l3.4,11.94-.13,3.48-7,3.07-9.34,3.62-11.66,8.5-1.27-2.54,3.08-3.06-1.78-1.54-3.33-17.07,12.66-2.83Z"/>
                    <path id="US-DE" className={"block-21 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-21"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M930.35,230.21l-2,2.89,1.42,4.5,6.32,11.08,7.33,10.2-11.58,2.66-7.64-27.9.91-2,1.31-1.34Z"/>
                    <path id="US-FL" className={"block-17 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-17"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M858.67,454.11l5.22,16.08,10.58,17.33L886.32,503l1.53,8.85,12.88,21.75,4.47,20.21-.81,20.57-8.06,5.55-10.75-1.06-4.94-9.52-8.74-4-14-18-12.52-15.19-3.46-10.7,1.41-14.38L836.86,495,822,483.21l-12.45-7.11-21.1,12.35-5.32-5.84-19.83-8.17-22,5.1,1.14-3.26.61-4.59-5-5.12.15-1.76,11.09-2.37,39.93-4.54,3.72,5.75,19.85-1.5L845,461l2.06,3.73,2.22-2.42-1.17-7.86,2.23-1.14,4.13,1.06Z"/>
                    <path id="US-GA" className={"block-17 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-17"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M814,363l-1.77,2.16-2.37,4.68,5.55,3,3.43.9,4.51,6.61,2.82,3.66,7.34,4.35,1.72,2.6,5,3,3,5,6.77,3.58,2.18,4.92,1.53,2.31-.39,1.76,3.95,1.88,2.58,3.91.67,4.29,1.9.54,3.48.61-5.65,17.89-1.61,13.48-4.19.24-4.13-1.06-2.23,1.14,1.17,7.86-2.22,2.42L845,461l-32.27,1.17-19.85,1.5-3.72-5.75-1.29-2.56-1.58-2.75.08-3.78v-4.07l-1.56-4.14.21-7.34,2.69-4.36-2.17-3.84-3.6-6.75-7.16-21.93-8.12-27.47,14.34-1.5,9.87-1.48Z"/>
                    <path id="US-HI" className={"block-3 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-3"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M386.81,577.45l-3,.1L382,575.17l-.9-4.35,2.24-.78,3.28.52,3.31,2.87-.17,1.63Zm17.53,28.29-.66,3.48-3-1.37-.62-2.43-1-.48-.48-.1-1.92-1.63,1.05-6.3,2.46,1.6,3.75.34-1,5.34Zm11.44,17.19-3.54-.18-5.86-6.16,2.14-1.41Zm.39,3.51.38,3.47,3.3,1.61,2,5.74-.91,1.33-2.35,0-5.18-3,1.42-4.08-1.82-2,.38-3.08,1.6-.74ZM407.83,671l-3.3,1.32-2.68-4.91,3.87-5.3,2.25-8,7-1.6.83-3.42,1.47-1.3.87.25,6.34,12.29.27,3.33-1.3,2.37,1,1.2-.53,1.9.83,3.79-6.57.44-4.82-2.11Z"/>
                    <path id="US-IA" className={"block-10 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-10"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M652.16,184.62l.3,1.23,2.35,3.49-1.39,1.8.31,4.77.79,2,1.27,3.55,5.59,1.87,1.83,3.37,1.08,1.67,2.06,1,.95,2.4,2.76,1.65,1.87,1.85-.52,6.15-2.82,5.33-1,1.7L663.74,230,658,231.47l-1.32,4,2.22,1.65.92,3.47-2,4.05-1,3.5-4.25,3.6-.14,4.15-2.46-1.77-3.48-3.52-18.87,1.26-19.89.74-15.5.3-15.53.1-1.15-4.11.48-4.06-.38-3.91-1.77-6.55-1.13-2.71-1.23-.74-.12-5.25-1.06-3.76-3.07-4.29,0-1.88L566.22,212l-.74-2.27,0-2.08-2.7-2.54,1.37-3.72.89-3.64.41-2.47-2.11-3,.06-5.55h2.2l18.11,0,22.51-.63,24.18-.87Z"/>
                    <path id="US-ID" className={"block-5 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-5"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M328.12,143.42l.51.5-9.34,55.81-49.76-9-49.53-11,9.6-39.72,2.88-6-.61-3.2-2.63-2.2.88-3.54,3.42-4.51,4.44-3.59,3.92-6.66,3.44-5.24,2.25-2.54-.06-3.57-2.2-2.41-2.67-5.14,1.06-3.93-.62-3.73L250,52.64,256.65,24l14.56,3.32-4.08,23.87,2.66,6.84-.9,4,2,4.2L274,69.18l1.81,4L278.6,81l3.3,4.09,4.61,1.17-2.72,4.62-2.72,5.59.12,6-2.12,1.07-1,5.77,2.35,2.79,3.65-2,2.24-2.83,1.78,1,1.27,3.45.41,7.44,2.26,3.35-.13,6,.65,1.82,3.14,1.18,1.35,3.63,1.74,6.36L302.3,139l5.11,1.79.83-2.13,8.81,3,3.81-.08,3.06-4.07,1.63.91,1,3.42Z"/>
                    <path id="US-IL" className={"block-12 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-12"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M710.82,203.33v.06l.66,5.88,5.65,11.47h0l2.43,26.18L722,273.07l-1.41,6.47,1.6,1.52,1.29,3.77.15,3.05-1.36,1.51-.94,3.86-3.24,5.26-2,6.29-.17,4.62.27,1.67-1.76,3.32,1.72,2-3,1.92-3.92,2.24,1.11,4.88-2.22,2.06-4.54-1.74-4.91-.85-1.06,2.29,1,3.37-3.48-3.27-1.91.73-2.72-5.39.42-3.44-1.73-5.38-1.86-.54-5-4.65-2,.05-3.75-3-2.74-3.24.9-4.05,1.44-3.4.74-4.24-3.6-3.43L669.94,289l-2.07-.83-.51-3.77-1.72-4.22-1.68-.94-4.22-2.82-3.55-3.67-3.14-4.51-1.89-6.7,1.23-5.71.14-4.15,4.25-3.6,1-3.5,2-4.05-.92-3.47-2.22-1.65,1.32-4,5.79-1.45,3.81-1.54,1-1.7,2.82-5.33.52-6.15-1.87-1.85-2.76-1.65-.95-2.4-2.06-1-1.08-1.67,17.13-1.1,17.51-1.29,12.92-.91v-.06Z"/>
                    <path id="US-IN" className={"block-16 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-16"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M763.22,216.43l2.46,20.39,2.58,21.93,1.82,15.61-.87,1.19,2,4.42-.55,1.76-3,.4-2.52,2.32-4.27-.32.13,4.37-2.3,1.94-1.89,4.14-2.44,1-3.17,7.14-3.83-1.54L746,298.53l-2.63,4.82-1.72,2.72-4.11-2.26-3.9,2.56-1.14,2.33-5.84-2.91L723,308.62l-4.77-1.33,0,2.51-2.37-.38.17-4.62,2-6.29,3.24-5.26.94-3.86,1.36-1.51-.15-3.05-1.29-3.77-1.6-1.52,1.41-6.47-2.42-26.15-2.43-26.18h0l1.7,1.38,5.75-.68,4.32-2.94h0l18.21-1.84,15.88-2Z"/>
                    <path id="US-KS" className={"block-8 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-8"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M598.19,334.07l-16,.19-32.74-.11-32.75-.75-18.18-.69-18.16-.9-17.1-1,2.23-33.22,2.15-34.87h0l30.44,1.73,22.66.91,40.12.81h24l4.17,3,2.27-.07.54,3.28-2.42,4.23,1.36,2.14,2.23,4.74,4.67,2.08.18,24.29Z"/>
                    <path id="US-KY" className={"block-15 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-15"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M811.51,284.54l.65,2.08.5,4.67,2.64,3.19,1.37,3.27,3,2.52,2.2,2.44,3.54-.12-6.14,7.77-5.21,3.46-.17,1.88-1.56,2.65-4.55,3.39-1.31,2.41L803,326.07l-5.05,2-12.18,2.37-16.12,1-5.19.89-10.5.54-10.66.95-9.81.86-11.33,1.7-.68-1-3.61.37.37,3.55-26.1,1.87,3.92-2.68,2.75-2.1-.62-3.53.4-2.31-1-3.37,1.06-2.29,4.91.85,4.54,1.74,2.22-2.06-1.11-4.88,3.92-2.24,3-1.92-1.72-2,1.76-3.32-.27-1.67,2.37.38,0-2.51,4.77,1.33,3.61-2.83,5.84,2.91,1.14-2.33,3.9-2.56,4.11,2.26,1.72-2.72,2.63-4.82,1.41,2.64,3.83,1.54,3.17-7.14,2.44-1,1.89-4.14,2.3-1.94-.13-4.37,4.27.32,2.52-2.32,3-.4.55-1.76-2-4.42.87-1.19,6.07-.23,3.38,1.77,5.34,4.47,3.94,1.09,3,1.45,4.11-1.2,3.28.86,3.6-1.77,3.28-.87,1.86,2.94Z"/>
                    <path id="US-LA" className={"block-13 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-13"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M666,422.43l1.44,1.23L665.91,427l3,4.53-.64,2.86,2.71,3.78-2.56,2.48L667.8,445l-3.57,3.75-1.51,4.87-1.5,5.59L659,461.92l1.07,5.66,17.38-.2,18.53-1.13-.3,3.83-1,3.83,1.45,2.8,2.78,2.47,1,3.73.53,2.24-1.63,9.68,7.22,13.29-27.62,2.71L661,507.05l-11.79-4.2-15.34-2.4-17.36-.19-1.72-3,2-3.41,2.91-3.1-.06-4.57-1.49-1.49,1.59-5.51,1.2-2.51,1.68-8.41-1.83-3.07-2.4-5.14-1.8-5.25-1.17-3.5-3.25-2.5-1.71-24.35,18.53-.45,20.92-1.56Z"/>
                    <path id="US-MA" className={"block-24 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-24"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M989.05,143.16l3.14,11.64,8.69,10,6.92-1.42-4-7.46,6.3,3.41.52,6.61-10,6.74-8,1.81-1.39-3.21-3.28-1.79-2.81-5.4-6.82,2.14-15.37,3.57-12.66,2.83-.34-16.07,13.48-3.12L983,148.36l1.07-2.63,3-2.44Z"/>
                    <path id="US-MD" className={"block-20 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-20"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M924.2,233.29l7.64,27.9,11.58-2.66,1.44,1.77-5,9.13-4,1.27-1,1.83L923.64,264l-4.42-16.45-1.13,8.42L922.53,275l-11.91-4.33-1.68-2.9-2.64,1.56-2.57-.73.95-5.36,2.53-2.71-.07-1.86,1.83-2.45-2.69-1.83-1.18,1.36-3.74-1.8-3.93-.58.77-2.65-2.63-1.2-2.69-.23L891,246.77,888.21,244l-5.67-.7-3,2.33-1.56,2-5.26.09-1.86,2.77-3.26,1.53-2.49,3.12-2.29,2.49-1.93-11.35,16-3,5.44-1.11,12.16-2.55,14.67-3Z"/>
                    <path id="US-ME" className={"block-23 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-23"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M990.37,137.47l-1.63.7-1.61-2.84-3.87-2.41v-2.33L970,91.24l5.31-5.64L977.85,74l-.35-18.46,6.5-20,6.72,4.26L999.56,33l8.63,4.2,9.52,29.73,14,9,3.24,9.15-12.86,11.77-13.59,9.85-14,18.47Z"/>
                    <path id="US-MI" className={"block-16 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-16"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M753.73,106h0l5.32,0h0l-1.7,2.51,9,8-13.66,3.85-.54,0-12.74-.9-11.87,5.92L717,128.5l-8,15.38-.43-.12v0l-2.39-2.49.85-3.77-3.55.12.4-3.76.81-1.92-1.7-3.07L699,127.8l-1.2-3.67-3.12,0-4.49.34-9.47-3.39-14.14-3.12-1.54-4-2.52-.59,0-.07-.95.53-.15-.11.14.1,11.76-6.62,12-8.35,13.09-8.73-3.95,12.49,9.13,2.13,11.89,7.63,13.42-6.53L744.08,102l4.06,6,4.91.32Zm45.55,75.35h0l-.37.36-6,13.52-2.54,8.4h0l-4.54,9.49h0l-6.33,1.07-7.68,1-8.62,1.26-.23-1.76-15.88,2-18.21,1.84h0L732,215l5.66-11.73-1.15-15-7-13.41-.19-9.69,3.06-11.57,3.2-8.06,5.82-6.16,2.38,7.43,1.52-11.52,3.25-2.73,1.18-8.89,14.08,2.82,13,7.22,2.75,10.08,0,10.5-7.71,10.26,1.6,5.57,3.28-.25,8.73-11.34,6.35,1.38,4.89,12.62,2.21,9.1Z"/>
                    <path id="US-MN" className={"block-11 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-11"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M671.84,80.11h0l-15.26,8.59L646,98.49l-10.16,10.17L636,112l-4.1,1.45.69,12.82h-.5L628.23,129l-3.32,2.32-2.13,4.28,3.52,4.16-1,5.78.21,6.19-.32,5,4.91,4.21,1.95.13,5.41,3,1.9,1.46,1.26,2.4,4.31,3.72,5.72,3.09.63,1.85.33,5.47.57,2.54-21.73.57-24.18.87-22.51.63-18.11,0,.33-21.28-1.85-21.85-2.8-1.8-1.56-3.54.89-3.09,3.6-2.53.3-3.32,0-4.16-1-3.48-1.3-3.72-.73-4.66-.15-5.22-.52-1.26-.58-6.73,0-3.09L560,94.19l-.73-4.66-1.83-4.74-1.74-4.23-.21-4.18-.14-4.51.56-2.94.13-2.68-1.38-3.34-.19-2.27,31.43.09,0-8.87,5.11-.18,2.86,12.64,4.81,3.83,10.7,1.18,15.73,3.17L640.26,79l12.28-3.65,19.29,4.76Z"/>
                    <path id="US-MO" className={"block-12 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-12"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M652.39,255.87l-1.23,5.71,1.89,6.7,3.14,4.51,3.55,3.67,4.22,2.82,1.68.94,1.72,4.22.51,3.77,2.07.83,3.26-1.67,3.6,3.43-.74,4.24-1.44,3.4-.9,4.05,2.74,3.24,3.75,3,2-.05,5,4.65,1.86.54,1.73,5.38-.42,3.44,2.72,5.39,1.91-.73,3.48,3.27-.4,2.31.62,3.53-2.75,2.1-3.92,2.68-.32,2.22-.89,3.31-1,5.62-12,.79,1-2.32,1.9-2.58,1.91-2.57L681,343l-20.91-.17-19.31.89-20.24.64-22.26.16,0-10.42h-.09L598,309.83l-.18-24.29-4.67-2.08-2.23-4.74-1.36-2.14,2.42-4.23-.54-3.28-2.27.07-4.17-3-2.3-4.83-2.71-2.89L577,254.85l-.35-1.87,15.53-.1,15.5-.3,19.89-.74,18.87-1.26,3.48,3.52Z"/>
                    <path id="US-MS" className={"block-14 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-14"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M719.37,373.35l1.71,4.27-.82,29.65-.32,36.57,3.52,34.73-11.72,6.11-11.43.47-.53-2.24-1-3.73L696,476.71l-1.45-2.8,1-3.83.3-3.83-18.53,1.13-17.38.2L659,461.92l2.27-2.67,1.5-5.59,1.51-4.87L667.8,445l.66-4.35,2.56-2.48-2.71-3.78.64-2.86-3-4.53,1.57-3.38L666,422.43l.68-4.52-2.51-5.85.15-5.41,3.7-8.15,1.74-4.79,3.15-3.28,2.1-1.42,2.14-6.22-.13-3.29,3.23-1.9.24-1.82,18.36-1.28Z"/>
                    <path id="US-MT" className={"block-5 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-5"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M445.26,125l-2.68,20.78-26.83-2.88-28.95-3.29L361.89,136l-31.5-4.76-1.84,11.44-.43.75-1.54-1.53-1-3.42-1.63-.91-3.06,4.07-3.81.08-8.81-3-.83,2.13L302.3,139l-3.54,2.56L297,135.23l-1.35-3.63-3.14-1.18-.65-1.82.13-6-2.26-3.35-.41-7.44-1.27-3.45-1.78-1-2.24,2.83-3.65,2-2.35-2.79,1-5.77,2.12-1.07-.12-6,2.72-5.59,2.72-4.62-4.61-1.17L278.6,81l-2.8-7.84-1.81-4-3.06-2.89-2-4.2.9-4-2.66-6.84,4.08-23.87,44.43,9.17,44.72,7.7,44.95,6.23,45.13,4.75-3.52,42.05Z"/>
                    <path id="US-NC" className={"block-18 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-18"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M938.63,303.79l7.54,21.57-7.91,19L922.07,356.8,908.5,371.24l-6.33,2.61-24.71-17.24L856.92,360l-.39-2.62L853,354.05l-1.61,1.79-.47-1.95-8.79.37-17,2.46-9.4,5.32L814,363l-23.08,3-.21-4.82,3.73-1.93,1-2.58,2.25-3.08,3.65-1.1,4.18-1.63,3.92-2.53,1.53-2.24,3.23-2.3-.33-1.61,4.15-3.72,1.77,1.76,6.09-5.25,3.21,0,2.21-4.2,3.54-1.55-.7-3.17v-2.89l30.61-4.15,35.86-6.68,18.94-4.11Z"/>
                    <path id="US-ND" className={"block-9 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-9"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M554.48,60.64l.19,2.27,1.38,3.34-.13,2.68-.56,2.94.14,4.51.21,4.18,1.74,4.23,1.83,4.74.73,4.66.28,2.75,0,3.09.58,6.73.52,1.26.15,5.22.73,4.66,1.3,3.72,1,3.48,0,4.16-30.35.75-25.9-1-32.65-1.73L445.26,125l1.66-27.79,3.52-42,52.43,3.74Z"/>
                    <path id="US-NE" className={"block-10 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-10"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M565.48,209.7l.74,2.27,1.06,3.75,0,1.88,3.07,4.29,1.06,3.76.12,5.25,1.23.74,1.13,2.71,1.77,6.55.38,3.91-.48,4.06,1.15,4.11.35,1.87,2.93,3.58,2.71,2.89,2.3,4.83h-24l-40.12-.81-22.66-.91-30.44-1.73h0l0-.73,1.51-22L435,237.33l3.88-45.18,32.5,2.53,25,1.48,33.45,1.32,4.24,3,6.11,2,1.46-1,4,.16,6-.13,4.29,3,4.58,1.94.75,1.9,1.44,1.1Z"/>
                    <path id="US-NH" className={"block-23 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-23"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M990.37,137.47l-1.32,5.69-2,.13-3,2.44L983,148.36l-19.59,5.12-1.9-1.94.52-3.19-1.14-5.87L961,141l-.84-5.34.58-4.86.79-2.27.49-5.72-.59-3.64,0-2.28,2.76-1.89,2.83-3.52-.13-2.9-2-2.83.18-6.49h0l0-5.85,5-2.13,13.29,39.35v2.33l3.87,2.41,1.61,2.84Z"/>
                    <path id="US-NJ" className={"block-21 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-21"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M949.39,198.49l-3.12,12.14,4.45-.07,1,16.59-8.38,20-2.62-5.37-4-.26-5.45-4.83-1.45.59-1.42-4.15,2-2.89,3-2.83.9-1.66,3.34-3.87,1.61-2.92-6.67-4.46-.84-2.27-2-.26-.75-3.57,1.33-3.16-1.57-2.67L931,200l1.75-5.63,1.8-1.46Z"/>
                    <path id="US-NM" className={"block-7 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-7"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M445.85,329.46,445,340.68,440.43,400l-3.3,42.72-18-1.48-34.84-3.4-17.39-2,0,2,1.75,3.87-33.33-4.19-1.51,9.3-15.57-2.13,18.39-127.43,28.21,3.83,28.54,3.44,30.77,3.09Z"/>
                    <path id="US-NV" className={"block-2 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-2"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M269.53,190.77,247.24,302l-3.47,17.92-.93.58L241,323.6l-2.28-1.38-3.14-2.29-3.79-.78-1.81,2.48,1,3.38-1,4.78-.52,4.39v4.54l-2,4.13-24.25-34.76L178.3,271.36l-24.91-38.1,17.77-65.65L220,179.85l0-.06Z"/>
                    <path id="US-NY" className={"block-22 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-22"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M949.89,156.6l.34,16.07,3.33,17.07,1.78,1.54-3.08,3.06,1.27,2.54,22.78-9.06,6,2.83-21.62,12.72-10.67,2.73-.66-7.61-14.89-5.61-3.06-.92-3.19-.87-1.83-3-.13-2.54-2.44-1.54-4.4-2.64-22.47,5-24.17,5-26,4.92-1.1-6.06,11.73-15.95-.72-2.08v-.06l-3.46-6,8-4.44,13-1.72,13.71-.93,10.56-10-2.87-8.44L893,137.56l-.07,0h0l.07,0,13.05-18.88,6.17-5.76,23.85-6,.82,4.56.09,3,2.05,6.46,1.73,3.15-.44,5,2.93,5.4-.21,3.46.51.76,2.34-.42Z"/>
                    <path id="US-OH" className={"block-19 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-19"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M839.41,229l-2.17,1.52,1.21,2.72.08,5.29-.78,6.12-.86,5.11.1,2.35L833.13,258l-1.83,1.42-2.24,1-2.18-.16-3.27,4.47-.07,4.15-.2,2.27-1.42,1.13-.61-2.46-2.45-.18-1.72,5.24.48,5-1.82,3.46-4.29,1.23-3.61-1.67L806,279.93l-3.28.87-3.6,1.77-3.28-.86-4.11,1.2-3-1.45-3.94-1.09-5.34-4.47-3.38-1.77-6.07.23-1.82-15.61-2.58-21.93-2.46-20.39,8.62-1.26,7.68-1,6.33-1.08h0l11.07,3.17,8.59-.1,11.75-4.89,8.94-7.82,8.1-4.47Z"/>
                    <path id="US-OK" className={"block-8 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-8"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M598.24,344.49l4,23.93,0,22.1-.21,19.9-8.24-4.34-5.34-2.36-4.3,1.57-6.67-.21-4,0L570.31,407l-3.18.94-2.78-1.13L558,408l-2.84-3.82-3,3.25L547,405.86l-5.25-3.62L536,404.4l-2.36-5.53-8.82.31-5.59-1.39L513,396l-2.63-4.81-5,1.33-3-2L498,387.87l1-21.66,1-22.21-18.3-.91-18.3-1.1L445,340.68l.84-11.22,17.45,1.33,17.1,1,18.16.9,18.18.69,32.75.75,32.74.11,16-.19h.09Z"/>
                    <path id="US-OR" className={"block-1 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-1"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M242.66,91.5l2.67,5.14,2.2,2.41.06,3.57-2.25,2.54-3.44,5.24L238,117.06l-4.44,3.59-3.42,4.51-.88,3.54,2.63,2.2.61,3.2-2.88,6L220,179.79l0,.06-48.82-12.24-68.45-20.38-1.26-13.8,12.32-21.65,8.93-24.11,13.21-32,3.23.69L143.73,58l3.07,3.13,4,2.61,1.56,5-.71,3.79.21,3.41,3.3,1.9,3.8,1.06,6.63-.57,3.69.31,5.23,2.52,2.1,1.84,3.45.13,4-.8L191,84.53l6.39-.89,3.49-1,3.68,2,6.14-.87Z"/>
                    <path id="US-PA" className={"block-22 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-22"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M934.5,192.88l-1.8,1.46L931,200l-2.22,2.57,1.57,2.67L929,208.37l.75,3.57,2,.26.84,2.27,6.67,4.46-1.61,2.92-3.34,3.87-.9,1.66-3,2.83-3.93-.3-1.31,1.34-.91,2-15.05,3.39-14.67,3-12.16,2.55-5.44,1.11-16,3-18,3.2L839.41,229l-5.11-30h0l11.42-8.69,0,0,1.1,6.06,26-4.92,24.17-5,22.47-5,4.4,2.64,2.44,1.54.13,2.54,1.83,3,3.19.87Z"/>
                    <path id="US-RI" className={"block-25 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-25"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M992.56,174.53l-11,7.16.13-3.48-3.4-11.94,6.82-2.14,2.81,5.4,3.28,1.79Z"/>
                    <path id="US-SC" className={"block-18 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-18"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M902.17,373.85,897.82,391l-13.93,16.92-18,14.86-3.48-.61-1.9-.54-.67-4.29-2.58-3.91-3.95-1.88.39-1.76-1.53-2.31L850,402.52l-6.77-3.58-3-5-5-3-1.72-2.6L826.13,384l-2.82-3.66-4.51-6.61-3.43-.9-5.55-3,2.37-4.68L814,363l1.75-.93,9.4-5.32,17-2.46,8.79-.37.47,1.95,1.61-1.79,3.52,3.31.39,2.62,20.54-3.37Z"/>
                    <path id="US-SD" className={"block-9 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-9"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M565.63,186.67h-2.2l-.06,5.55,2.11,3-.41,2.47-.89,3.64-1.37,3.72,2.7,2.54,0,2.08-2.82-.33-1.44-1.1-.75-1.9-4.58-1.94-4.29-3-6,.13-4-.16-1.46,1-6.11-2-4.24-3-33.45-1.32-25-1.48-32.5-2.53,3.7-46.34L445.26,125l30.38,2.27L508.29,129l25.9,1,30.35-.75-.3,3.32-3.6,2.53-.89,3.09,1.56,3.54,2.8,1.8L566,165.39Z"/>
                    <path id="US-TN" className={"block-15 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-15"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M797.93,328.06l27-3.14,9.1-1.87v2.89l.7,3.17-3.54,1.55-2.21,4.2-3.21,0-6.09,5.25-1.77-1.76-4.15,3.72.33,1.61-3.23,2.3-1.53,2.24-3.92,2.53-4.18,1.63-3.65,1.1-2.25,3.08-1,2.58-3.73,1.93.21,4.82L781,367.41l-14.34,1.5-23.9,2.27-23.4,2.17-20.48,1.15-18.36,1.28,2-2.25-.65-6.58,2.74-3.17.46-3.8,3.09-2.42,1.65-3.32.06-1.89,1-5.62.89-3.31.32-2.22,26.1-1.87-.37-3.55,3.61-.37.68,1,11.33-1.7,9.81-.86,10.66-.95,10.5-.54,5.19-.89,16.12-1Z"/>
                    <path id="US-TX" className={"block-7 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-7"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M602.06,410.42l1,1.47,3.69-.37h4.41l-.83,12.94,1.71,24.35,3.25,2.5,1.17,3.5,1.8,5.25,2.4,5.14,1.83,3.07-1.68,8.41-1.2,2.51-1.59,5.51,1.49,1.49.06,4.57-2.91,3.1-2,3.41,1.72,3-17,5.14-18.2,17.2L561,532.5l-11.26,10.89L544.9,553.7l-.44,15.94.87,11.13,3.87,8-8.2.57-14.78-5.41-16.09-7.66-5.45-11.07-3.93-16.33-11.54-13.64-6.39-13.8-9.29-16.24L460,495.19l-16.35-.65-14,17.14-16.11-8.25-9.72-7.84-3.76-13L394.63,470,384,458.82l-9.19-8.26-6.16-8.86-1.75-3.87,0-2,17.39,2,34.84,3.4,18,1.48,3.3-42.72L445,340.68,463.28,342l18.3,1.1,18.3.91-1,22.21-1,21.66,4.38,2.63,3,2,5-1.33L513,396l6.28,1.83,5.59,1.39,8.82-.31L536,404.4l5.74-2.16,5.25,3.62,5.16,1.54,3-3.25L558,408l6.35-1.19,2.78,1.13,3.18-.94,3.25-1.85,4,0,6.67.21,4.3-1.57,5.34,2.36Z"/>
                    <path id="US-UT" className={"block-4 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-4"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M349.47,227.4l-12.84,89.85-26.07-4.15-34.44-6L247.24,302l22.29-111.18,49.76,9-3.72,21.79Z"/>
                    <path id="US-VA" className={"block-20 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-20"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M892.88,249.33l2.68.24,2.64,1.19-.78,2.65,3.93.58,3.75,1.8,1.84,1.6.19,1.32.07,1.86-2.52,2.71-.95,5.36,2.57.72,2.64-1.56,1.68,2.91,13.73,10,5.74,9.84.35.6,8.2,12.61-19.16,4.32-18.93,4.11-35.87,6.68-30.61,4.16-9.1,1.87-27,3.14,5.06-2,3.53-1.92,1.3-2.42,4.55-3.38,1.57-2.65.17-1.88,5.21-3.46,6.13-7.78,1.39,3.68,2.33,1.71,3,1.37,5.21-3.61,2.41,1.22,6.36-3,.05-2.07,2.15.45,1.93-2,2.54-.11,2.53-2.22,0-2.11-.77-2.53,1.72-4.29,2.9-3.52.28-3.45,2.3-4.51.8-5.16,2.64,1.3,2.9,1.11,2.36-1.33.46-2.19,1.2-3.09,1.34-3.53,1.44.69,2-3.37,2.84-3.57,1.72-2.63.2-6.19,10,4.26Zm39.35,39.49,1.81.52,5.88-19.91-4,1.27-1,1.82Z"/>
                    <path id="US-VT" className={"block-24 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-24"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M963.37,153.48l-13.48,3.12-4-18.35-2.34.42-.51-.76.21-3.46-2.93-5.4.44-5-1.73-3.15L937,114.47l-.09-3-.82-4.56,28.83-7.68h0l-.18,6.49,2,2.83.13,2.9L964.12,115l-2.76,1.89,0,2.28.59,3.64-.49,5.72-.79,2.27-.58,4.86L961,141l-.13,1.51,1.14,5.87-.52,3.19Z"/>
                    <path id="US-WA" className={"block-1 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-1"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M256.65,24,250,52.64l-6.88,31.2.62,3.73-1.06,3.93-32-7.71-6.14.87-3.68-2-3.49,1-6.39.89-6.88-2.21-4,.8L176.64,83l-2.1-1.84-5.23-2.52-3.69-.31-6.63.57-3.8-1.06-3.3-1.9-.21-3.41.71-3.79-1.56-5-4-2.61L143.73,58l-4.59-1.56-3.23-.69,1.7-19.45,4.33-21.82,19.27,10.45,1.35,19.22L168,39.4l3-18.77L169.61.34l43.32,12.58Z"/>
                    <path id="US-WI" className={"block-11 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-11"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M661.44,113.67l.15.11.94-.54,0,.07,2.53.6,1.54,4,14.13,3.11,9.48,3.39,4.48-.33,3.12,0,1.2,3.67,3.9,1.11,1.7,3.07-.81,1.92-.4,3.76,3.55-.12-.85,3.77,2.39,2.49v0l.43.12-.13.23-5.59,8.77,2.44,2.49,10.48-15.75,2.41-.32-6.69,18.29-2.22,16.15-2,13.11,3.08,10.91.06,5.56h-.06v.06l-12.92.91-17.51,1.29-17.13,1.1-1.83-3.37-5.59-1.87-1.27-3.55-.79-2-.31-4.77,1.39-1.8-2.35-3.49-.3-1.23-.57-2.54-.33-5.47-.63-1.85-5.72-3.09L640.6,168l-1.26-2.4-1.9-1.46-5.41-3-1.95-.13-4.91-4.21.32-5-.21-6.19,1-5.78-3.52-4.16,2.13-4.28,3.32-2.32,3.84-2.68h.5l-.69-12.82L636,112h0l15.51-5.55Z"/>
                    <path id="US-WV" className={"block-19 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-19"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M860.91,246.32l1.93,11.35,2.29-2.49,2.49-3.12,3.26-1.53,1.86-2.77,5.26-.09,1.56-2,3-2.33,5.67.7,2.74,2.75,1.93,2.56-1.09,4.57-10-4.26-.2,6.19-1.72,2.63L877,262l-2,3.37-1.44-.69-1.35,3.52-1.2,3.1-.46,2.18-2.35,1.33-2.91-1.11-2.64-1.3-.8,5.16-2.3,4.51-.28,3.45-2.89,3.52-1.73,4.29.75,2.57,0,2.11-2.52,2.22-2.54.11-1.93,2-2.15-.46-.05,2.07-6.36,3-2.41-1.23-5.21,3.61-3-1.37-2.34-1.71-1.38-3.68-3.54.12-2.2-2.44-3-2.52-1.37-3.27-2.64-3.19-.5-4.67-.65-2.08,4.29-1.23,1.82-3.46-.48-5,1.72-5.24,2.45.18.61,2.46,1.42-1.13.2-2.27.07-4.15,3.27-4.47,2.18.16,2.24-1,1.83-1.42,3.86-5.89-.1-2.35.86-5.11.78-6.12-.08-5.29-1.21-2.72,2.17-1.52L843,249.52Z"/>
                    <path id="US-WY" className={"block-6 cls-1 " + this.props.votes.find((item) => {
                        return item.block === "block-6"
                    }).voteOwner}
                          onMouseDown={(event) => this.props.eventReturn(event, event.currentTarget)}
                          d="M442.58,145.81l-3.7,46.34L435,237.33l-17.15-1.61-34.23-3.78-17.08-2.18-17.07-2.36-33.9-5.88,3.72-21.79,9.34-55.81-.51-.5.43-.75,1.84-11.44,31.5,4.76,24.91,3.65,28.95,3.29Z"/>
                </svg>
            </div>
        );
    }
}

