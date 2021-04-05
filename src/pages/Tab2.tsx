import { camera, checkmarkDoneOutline, trash, close } from 'ionicons/icons';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCol,
  IonImg, 
  IonActionSheet,
  IonRow,
  IonRadioGroup,
  IonRadio,
  IonGrid,
  IonFabButton,
  IonFab,
  IonIcon
 } from '@ionic/react';
 import { usePhotoGallery } from './../hooks/UsePhotoGallery';
//import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*
        {
          photos.length === 0 ? (
            <IonCard>
          <IonCardContent>
          <IonItem>
      <IonLabel className="ion-text-wrap">
        Multi-line text that should wrap when it is too long
        to fit on one line in the item.
      </IonLabel>
    </IonItem>
          </IonCardContent>
        </IonCard>
          ) : (
            <IonGrid>
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol size="6" key={index}>
          <IonImg src={photo.webviewPath} />
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
          )
        }
        */}
        <IonCard>
          <IonCardTitle>Easel</IonCardTitle>
          {
            photos.length === 0 ?
            (
              <IonCardContent>Place a photo here to edit</IonCardContent>
            ) : (
              <>
              <IonCardContent>
                {photos.map((photo, index) =>(
                  <IonImg src={photo.webviewPath} alt="turn on images" key={index}/>
                ))
                }
              </IonCardContent>

              
              <IonRadioGroup>
              <IonRow>
              <IonItem>
          <IonLabel>Blur</IonLabel>
          <IonRadio slot="start" value="blur" />
        </IonItem>

        <IonItem>
          <IonLabel>GrayScale</IonLabel>
          <IonRadio slot="start" value="grayscale" />
        </IonItem>
        </IonRow>
        <IonRow>
              <IonItem>
          <IonLabel>Hue Rotate</IonLabel>
          <IonRadio slot="start" value="hue-r" />
        </IonItem>

        <IonItem>
          <IonLabel>Invert</IonLabel>
          <IonRadio slot="start" value="inv" />
        </IonItem>
        </IonRow>
              </IonRadioGroup>
              <IonItem>
              <IonLabel>Tap Checkmark to SAVE</IonLabel>
              <IonIcon icon={checkmarkDoneOutline} id="check-mark"/>
              </IonItem>
            </>

            )
          }
        </IonCard>
        
        {/* <ExploreContainer name="Tab 2 page" /> */}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
