# Generated by Django 3.0.2 on 2020-01-21 19:36

from django.db import migrations, models
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='comment',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='file',
            field=versatileimagefield.fields.VersatileImageField(upload_to='../../../resources/images/', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='image',
            name='source_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]