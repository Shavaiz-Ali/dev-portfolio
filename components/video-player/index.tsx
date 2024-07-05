import ReactPlayer from "react-player/youtube";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const VideoPlayer = ({ playVideo, setPlayVideo }: any) => {
  return (
    <Dialog open={playVideo} onOpenChange={setPlayVideo}>
      <DialogContent className="  w-[95%]  lg:max-w-[800px] h-[300px] md:h-[400px] border-0 p-0">
        <div className="video-player">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            playing={true}
            controls={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
