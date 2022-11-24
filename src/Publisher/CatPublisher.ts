import { Injectable } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';

@Injectable()
export class CatPublisher {
  pubsub = new PubSub();

  topic = this.pubsub.topic(
    'projects/terraform-test-368613/topics/terraform_topic_123',
  );

  async publish(): Promise<void> {
    console.log('Published cat message!');
    await this.topic.publishMessage({
      json: { cats: ['Maine Coon Cat', 'Persian Cat', 'Burmese Cat'] },
      attributes: { name: 'CatPublisher' },
    });
  }
}
