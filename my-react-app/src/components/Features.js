import React from 'react';
import FeatureItem from '../components/FeaturesItem';

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        iconSrc="./img/icon-chat.png"
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      {/* Ajoutez les autres items de fonctionnalités ici... */}
    </section>
  );
}

export default Features;
