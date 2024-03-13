import ChatBot from 'react-simple-chatbot';

export const Chat = () => {
  return (
    <>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hello and welcome to Rentify! I am your assistant here to make your experience seamless and enjoyable.',
            trigger: '2',
          },
          {
            id: '2',
            message: 'Please enter your name.',
            trigger: '3',
          },
          {
            id: '3',
            user: true,
            trigger: '4',
          },
          {
            id: '4',
            message: 'Hi {previousValue}, How can I help you?',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'forget password', trigger: '6' },
              { value: 2, label: 'room/house post', trigger: '7' },
              { value: 3, label: 'connect to owner', trigger: '8' },
              { value: 4, label: 'update password', trigger: '9' },
              { value: 5, label: 'query not listed above', trigger: '10' },
            ],
          },
          {
            id: '6',
            message: "Navigate to the login page, click on 'Forgot Password,' enter your email, and click the 'Forget Password' button. You will receive a link in your registered email; click on the link to log in, then proceed to update your password in the settings.",
            trigger: '14',
          },
          {
            id: '7',
            message: 'First, please log in. If you are already logged in, navigate to the navbar and click on the "Ad Post" menu',
            trigger: '14',
          },
          {
            id: '8',
            message: 'Click on the interested ad, and the ad view page will open. Scroll down to find an inquiry form there.',
            trigger: '14',
          },
          {
            id: '9',
            message: 'First, log in > Navigate to the dashboard > Proceed to settings > Update your password.',
            trigger: '14',
          },
          {
            id: '10',
            options: [
              { value: 1, label: 'not able to register', trigger: '11' },
              { value: 2, label: 'search guide', trigger: '12' },
              { value: 3, label: 'edit ad', trigger: '13' },
              { value: 4, label: 'Go to Menu', trigger: '5' },
            ],
          },
          {
            id: '11',
            message: 'Please send your email ID to register at rentifyroomrental@gmail.com.',
            trigger: '14',
          },
          {
            id: '12',
            message: 'You can search based on area or square footage and apply filters for basic amenities if desired.',
            trigger: '14',
          },
          {
            id: '13',
            message: 'Navigate to the dashboard, where you will find your posted ads. Click on the ad you wish to edit.',
            trigger: '14',
          },
          {
            id: '14',
            options: [
              { value: 1, label: 'Go to Menu', trigger: '5' },
            ],
          },

        ]}
        floating={true}
      />

    </>
  )
}

