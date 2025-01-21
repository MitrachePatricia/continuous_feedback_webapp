import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SessionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const handleOpenCreate = () => setOpen(true);
  const handleCloseCreate = () => setOpen(false);
  const handleOpenJoin = () => setOpenJoin(true);
  const handleCloseJoin = () => setOpenJoin(false);
  const [activityname, setactivityname] = useState("");
  const [newActivityCode, setnewActivityCode] = useState("");
  const [joinActivitystate, setjoinActivitystate] = useState("");
  const [activityDescription, setactivityDescription] = useState("");
  const [activityStartTime, setactivityStartTime] = useState("");
  const [activities, setActivities] = useState([]);

  async function endSession(idSession) {
    await axios.patch(`http://localhost:3000/api/activityEnd/${idSession}`)
      .then(res => {
        alert('Session ended successfully');
      })
      .catch(err => {
        console.error('Error ending session:', err);
        alert('Failed to end session');
      });
  }
  const handleFeedback = async (emojiName) => {
    const timestamp = new Date().toISOString();
    const feedback = {
      feedbackMsg: emojiName,
      timestamp: timestamp,
      activityId: location.state._id,
    }
    try {
        await axios.patch('http://localhost:3000/api/activityFeedback', {
            activityId : feedback.activityId,
            feedbackMsg: feedback.feedbackMsg
        })
        .then(res=>{
            setFeedbacks(prevFeedbacks => [...prevFeedbacks, feedback]);
            alert('Feedback sent successfully');

        })
      } catch (error) {
        console.error('Error sending feedback:', error);
        alert('Failed to send feedback');
      }
    

}
async function endSession() {
    await axios.patch(`http://localhost:3000/api/activityEnd/${location.state._id}`)
      .then(res => {
        alert('Session ended successfully');
        //navigate("/main");
      })
      .catch(err => {
        console.error('Error ending session:', err);
        alert('Failed to end session');
      });
  }
  useEffect(() => {
    let arr = location.state.feedback.split(";")
    let feedback = [];
    console.log(arr)
    for(let i in arr ){
        let feedbackObj = {
            feedbackMsg : arr[i],
        }
        feedback.push(feedbackObj)
    }
    setFeedbacks(feedback);

  }, []);

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>          
            <Card  key={location.state._id} sx={{ width: '100%', height: 400, border: 1 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                  {location.state.activityname}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  {location.state.activityDescription}
                </Typography>
                <Typography variant="body3" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  {location.state.startTime}
                </Typography>
                <Typography variant="body3" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  {location.state.activityCode}
                </Typography>
                <Typography variant="body3" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  {location.state?.endTime}
                </Typography>
                {
                  !location.state.endTime && <MDBBtn className="mb-4" onClick={endSession}>
                     End session
                </MDBBtn>
                }
                
                </CardContent>
            </Card>
    </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              
                  <Card  sx={{ width: '80%', maxWidth: '50%', border: 1, margin: 2 }}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 200 }}>
                      <CardActionArea onClick={() => handleFeedback('smile')} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1, width: 120, height: 120 }}>
                        <img src={`/emoticons/smile.png`} alt="smile" style={{ width: '100%', height: '100%' }} />
                      </CardActionArea>
                      <CardActionArea onClick={() => handleFeedback('frowny')} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1, width: 120, height: 120 }}>
                        <img src={`/emoticons/frowny.png`} alt="frowny" style={{ width: '100%', height: '100%' }} />
                      </CardActionArea>
                      <CardActionArea onClick={() => handleFeedback('confused')} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1, width: 120, height: 120 }}>
                        <img src={`/emoticons/confused.png`} alt="confused" style={{ width: '100%', height: '100%' }} />
                      </CardActionArea>
                      <CardActionArea onClick={() => handleFeedback('surprised')} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1, width: 120, height: 120 }}>
                        <img src={`/emoticons/surprised.png`} alt="surprised" style={{ width: '100%', height: '100%' }} />
                      </CardActionArea>

                    </CardContent>
                  </Card>
            </Box>
           
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Card sx={{ width: '80%', maxWidth: '50%', border: 1, margin: 2 }}>
            <CardContent sx={{ maxHeight: 200, overflowY: 'auto' }}>
              {feedbacks?.map((feedback, index) => (
                <Typography key={index} variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  Anonymous reacted <b>{feedback.feedbackMsg}</b> at {feedback.timestamp}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Box>
        
            </>
  );
}

export default SessionPage;