import {useState} from 'react';
import { camera, checkmarkDoneOutline, settings, thermometer, save, contrast, sunny, trash, close } from 'ionicons/icons';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonRange,
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
  IonFabList,
  IonIcon
 } from '@ionic/react';
 import { usePhotoGallery } from './../hooks/UsePhotoGallery';
//import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
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

              <IonCardContent>
              <IonItem>
          <IonRange value={0} min={0} max={100} color="success">
          <IonIcon slot="start" size="small" icon={sunny}/>
          <IonIcon slot="end" icon={sunny}/>
          </IonRange>
        </IonItem>

              <IonItem>
          <IonRange value={50} min={0} max={100} color="warning">
          <IonIcon slot="start" size="small" icon={contrast}/>
          <IonIcon slot="end" icon={contrast}/>
          </IonRange>
        </IonItem>

              <IonItem>
          <IonRange value={25} min={0} max={100} color="danger">
          <IonIcon slot="start" size="small" icon={thermometer}/>
          <IonIcon slot="end" icon={thermometer}/>
          </IonRange>
        </IonItem>

        </IonCardContent>

            </>

            )
          }
        </IonCard>
        <IonFab horizontal="end" vertical="top" slot="fixed">
          <IonFabButton color="primary">
            <IonIcon icon={settings} />
          </IonFabButton>
          <IonFabList>
          <IonFabButton onClick={() => takePhoto()} color="success">
            <IonIcon icon={camera} />
          </IonFabButton>
          <IonFabButton color="warning">
            <IonIcon icon={save} />
          </IonFabButton>
          <IonFabButton color="danger">
            <IonIcon icon={trash} />
          </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
