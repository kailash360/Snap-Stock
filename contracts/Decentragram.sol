// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Decentragram {

  struct Image{
    uint image_id;
    string name;
    string description;
    string hash;
    address payable author;
    uint minimum_tip;
    uint total_tip;
    uint date;
  }

  uint public image_count = 0;
  mapping (uint=>Image) public images;

  event added_image(string _name);
  event tipped_image(string _name,uint _tip_amount);
  
  
  function upload_image(string memory _hash,string memory _name,string memory _description,address payable _author,uint _minimum_tip) public payable{

    //Create an new image instance
    image_count++;
    Image memory new_image = Image(image_count,_name,_description,_hash,_author,_minimum_tip,0,block.timestamp);

    //Add the image to the mapping
    images[image_count] = new_image;

    //Emit an event 
    emit added_image(_name);
  }

  function tip_image(uint _image_id,uint _tip_amount) public payable{

    //find the image with the given image id
    Image memory image = images[_image_id];
    
    //Send the tip to the author of the image
    image.author.transfer(_tip_amount);

    //Add the tip amount to the total tip of the image
    image.total_tip += _tip_amount;

    //Update the image in the mapping
    images[_image_id] = image;

    //emit an event 
    emit tipped_image(image.name, _tip_amount);
  }

}
